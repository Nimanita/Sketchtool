from sketches.dao.MongoConnection import MongoConnection

class sketchesDao(MongoConnection):

    def __init__(self):
        super(sketchesDao, self).__init__()
        self.get_collection("sketches")
    
    def createSketch(self, sketch):
        result = self.collection.insert_one(sketch)
        return result.acknowledged 
    
    def getSketches(self, userName):
        cursor = self.collection.find({"userName" : userName})
        result = list(cursor)
        return result

   
  