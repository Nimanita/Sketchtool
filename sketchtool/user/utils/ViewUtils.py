class ViewUtils:

    
    @classmethod
    def getIsUIFlag(cls, request):
        isUI = request.GET.get('isUI', None)
        if isUI and isUI.lower() == 'true':
            return True
        return False
    
    @classmethod
    def getUserName(cls, request):
        userName = request.GET.get('userName', None)
        return userName