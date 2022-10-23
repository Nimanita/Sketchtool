from pymongo import MongoClient
from django.conf import settings


class MongoConnection(object):
    def __init__(self):
        DATABASES = settings.DATABASES
        self.client = MongoClient(host=[DATABASES['USER']['HOST']],
                                  username=DATABASES['USER']['USERNAME'],
                                  password=DATABASES['USER']['PASSWORD']
                                ,
                                 connect=False)
        self.db = self.client[DATABASES['USER']['DATABASE']]


    def get_collection(self, name):
        self.collection = self.db[name]