from sketches.dao.sketchesDao import sketchesDao
import json
import traceback
from user.utils.ResponseFormatter import ResponseFormatter
import logging
from rest_framework import status
from user.utils.Validator import Validator
from bson.json_util import dumps
import secrets
import string

import random

log = logging.getLogger(__name__)

class sketchesService:

    sketchesDao = sketchesDao()
    SEARCHABLE_KEYS = []

    @classmethod
    def createSketch(cls, userName, sketch , sketchName , isUI=False):
        try:
            
            data = {
                "userName" : userName,
                "sketchId" : cls.generateUniqueSketchId(),
                "sketchName" : sketchName,
                "sketch" : sketch
            }
            result= cls.sketchesDao.createSketch(data)
            if result:
                return ResponseFormatter.formatAndReturnResponse({"message" : f"Sketch saved successfully"}, status.HTTP_200_OK, isUI)
        except Exception as e:
            exceptionTrace = traceback.format_exc()
            message = f"Failure while adding user" \
                      f"exceptionTrace: {exceptionTrace}" \
                      f" Exception: {str(e)}"
            print(message)
        return ResponseFormatter.formatAndReturnResponse({"message" : " Failed to add user"}, status.HTTP_500_INTERNAL_SERVER_ERROR, isUI)

    @classmethod
    def generateUniqueSketchId(cls):
        id = ''.join(secrets.choice(string.ascii_uppercase + string.digits + string.ascii_lowercase)
               for i in range(12))
       
        return id
    
    @classmethod
    def findSketches(cls, userName , isUI=False):
        try:
            print(userName , type(userName))
            sketches= cls.sketchesDao.getSketches(userName)
            print(sketches)
            if sketches:
                sketches = json.loads(dumps(sketches))
                return ResponseFormatter.formatAndReturnResponse(sketches, status.HTTP_200_OK, isUI)
        except Exception as e:
            exceptionTrace = traceback.format_exc()
            message = f"Failure while adding user" \
                      f"exceptionTrace: {exceptionTrace}" \
                      f" Exception: {str(e)}"
            print(message)
        return ResponseFormatter.formatAndReturnResponse([], status.HTTP_200_OK, isUI)

        
        