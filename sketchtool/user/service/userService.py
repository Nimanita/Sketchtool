from user.dao.userDao import userDao
import json
import traceback
from user.utils.ResponseFormatter import ResponseFormatter
import logging
from rest_framework import status
from user.utils.Validator import Validator
from bson.json_util import dumps
log = logging.getLogger(__name__)

class userService:

    userDao = userDao()
    SEARCHABLE_KEYS = []

    @classmethod
    def addUser(cls, user, isUI=False):
        try:
            
            result , message = Validator.validateUser(user)
            print(message)
            if not result:
                return ResponseFormatter.formatAndReturnResponse({"message" : message}, status.HTTP_400_BAD_REQUEST, isUI)
            print("suddjdf" , user)
            result , message = cls.validationsForUniqueEntry(user)
            print(message)
            if not result:
                return ResponseFormatter.formatAndReturnResponse({"message" : message}, status.HTTP_400_BAD_REQUEST, isUI)

            result , userId= cls.userDao.addUser(user)
            if result:
                return ResponseFormatter.formatAndReturnResponse({"message" : f"User added successfully and user id is {userId}"}, status.HTTP_200_OK, isUI)
        except Exception as e:
            exceptionTrace = traceback.format_exc()
            message = f"Failure while adding user" \
                      f"exceptionTrace: {exceptionTrace}" \
                      f" Exception: {str(e)}"
            print(message)
        return ResponseFormatter.formatAndReturnResponse({"message" : " Failed to add user"}, status.HTTP_500_INTERNAL_SERVER_ERROR, isUI)

   
    @classmethod
    def findUser(cls, email , password , isUI):
        try:
           
            user = cls.userDao.findUser(email , password)
            if user:
                userInfo = json.loads(dumps(user))
                return ResponseFormatter.formatAndReturnResponse(userInfo, status.HTTP_200_OK, isUI)

        except Exception as e:
            exceptionTrace = traceback.format_exc()
            message = f"Failure while finding user" \
                      f"exceptionTrace: {exceptionTrace}" \
                      f" Exception: {str(e)}"
        print("not found" , email , password)
        return ResponseFormatter.formatAndReturnResponse({"message" : "Bad Credential"}, status.HTTP_404_NOT_FOUND, isUI)
    
    @classmethod
    def IsEmailIdExist(cls, emailId):
        try:
            
            count = cls.userDao.findUserEmailId(emailId)
            if count:
                return True
        except Exception as e:
            exceptionTrace = traceback.format_exc()
            message = f"Failure while finding emailId" \
                      f"exceptionTrace: {exceptionTrace}" \
                      f" Exception: {str(e)}"
            
            return False
    
    @classmethod
    def IsUserExist(cls, userName):
        try:
            
            count = cls.userDao.findUserName(userName)
            if count:
                return True
        except Exception as e:
            exceptionTrace = traceback.format_exc()
            message = f"Failure while finding userName" \
                      f"exceptionTrace: {exceptionTrace}" \
                      f" Exception: {str(e)}"
            
            return False
    
    @classmethod
    def validationsForUniqueEntry(cls, user):
        
        if cls.IsEmailIdExist(user["email"]):
                return False , "User email already exist"
        
        if cls.IsUserExist(user["userName"]):
                return False , "UserName already exist"
        return True , None
      