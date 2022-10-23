from datetime import date
from django.http import JsonResponse
from rest_framework import status
import re
from bson import ObjectId


class Validator:

    @classmethod
    def validateUser(cls, user):
        print(user , "user")
        if not(isinstance(user, dict)):
            return False , "Invalid User type"
        
        if "firstName" not in user or "lastName" not in user or "email" not in user or "password" not in user or "userName" not in user:
            return False , "Incomplete User info"
        
        if not isinstance(user["firstName"], str) or len(user["firstName"]) == 0 or len(user["firstName"]) > 50 or not re.match(r"^[a-zA-Z]*$",user["firstName"]):
            return False , "Invalid User First Name "
        
        if not isinstance(user["lastName"], str) or len(user["lastName"]) == 0 or len(user["lastName"]) > 50 or not re.match(r"^[a-zA-Z]*$",user["lastName"]):
            return False , "Invalid User last Name "
        
        if not isinstance(user["email"], str) or not re.match(r"\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b",user["email"]) :
            return False , "Invalid User email"
        
        if not isinstance(user["userName"], str) or len(user["lastName"]) == 0 or len(user["lastName"]) > 10:
            return False , "Invalid User Name "
        
        if not isinstance(user["password"], str) or len(user["password"]) < 8 :
            return False , "Invalid User Password "
                     
        return True , None
    
