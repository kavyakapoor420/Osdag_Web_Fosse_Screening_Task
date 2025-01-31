from django.db import models


#DesignSave model  will have 3 fields -> Designid,Designname,PhotofileName
class DesignSave(models.Model):
      DesignId=models.AutoField(primary_key=True)
      DesignName=models.CharField(max_length=100)
      PhotoFileName=models.CharField(max_length=100)