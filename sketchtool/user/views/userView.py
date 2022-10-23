from rest_framework.decorators import api_view , permission_classes
from rest_framework.parsers import JSONParser
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from user.service.userService import userService
from user.utils.ResponseFormatter import ResponseFormatter
from user.utils.ViewUtils import ViewUtils

@api_view(['POST'])
def handleUserOperation(request):
   
    isUI = ViewUtils.getIsUIFlag(request)
    if request.method == 'POST':
        requestBody = JSONParser().parse(request)
        
        return userService.addUser(requestBody , isUI)
    
@api_view(['POST'])
def handleUserLogin(request):
    
    print("inside view")
    isUI = ViewUtils.getIsUIFlag(request)
    if request.method == 'POST':
        requestBody = JSONParser().parse(request)
        if "email" not in requestBody or "password" not in requestBody:
            return ResponseFormatter.formatAndReturnResponse({"message" : "Bad Request"}, status.HTTP_400_BAD_REQUEST, isUI)

        return userService.findUser(requestBody["email"] , requestBody["password"] , isUI)


