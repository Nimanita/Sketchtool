from user.dao.MongoConnection import MongoConnection

class userDao(MongoConnection):

    def __init__(self):
        super(userDao, self).__init__()
        self.get_collection("user")
    
    def addUser(self, user):
        result = self.collection.insert_one(user)
        return result.acknowledged , result.inserted_id
    
    def findUserEmailId(self , email):
        count = self.collection.count_documents({"email" : email})
        return count
    
    def findUser(self , email , password):
        user = self.collection.find_one({"email" : email, "password" : password })
        return user
    
    def findUserName(self , userName):
        count = self.collection.count_documents({"userName" : userName})
        return count