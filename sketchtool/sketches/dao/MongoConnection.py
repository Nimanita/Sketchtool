from pymongo import MongoClient
from django.conf import settings


class MongoConnection(object):
    def __init__(self):
        DATABASES = settings.DATABASES
        self.client = MongoClient(host=[DATABASES['SKETCHES']['HOST']],
                                  username=DATABASES['SKETCHES']['USERNAME'],
                                  password=DATABASES['SKETCHES']['PASSWORD']
                                ,
                                 connect=False)
        self.db = self.client[DATABASES['SKETCHES']['DATABASE']]


    def get_collection(self, name):
        self.collection = self.db[name]