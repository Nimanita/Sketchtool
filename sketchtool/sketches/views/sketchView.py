from rest_framework.decorators import api_view , permission_classes
from rest_framework.parsers import JSONParser
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from sketches.service.sketchesService import sketchesService
from user.utils.ResponseFormatter import ResponseFormatter
from user.utils.ViewUtils import ViewUtils

@api_view(['POST' , 'GET'])
def handleSketchOperation(request):
    isUI = ViewUtils.getIsUIFlag(request)
    if request.method == 'POST':
        requestBody = JSONParser().parse(request)
        
        return sketchesService.createSketch(requestBody["userName"] , requestBody["sketch"] , requestBody["sketchName"] , isUI)
    
    if request.method == 'GET':
        print("request" , request)
        userName = ViewUtils.getUserName(request) 
        print("userName" , userName)     
        return sketchesService.findSketches(userName , isUI)

