from django.shortcuts import render

from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from Myapp.models import DesignSave
from Myapp.serializers import DesignSaveSerializer

from django.core.files.storage import default_storage
@csrf_exempt
def save_designAPI(req,id=0):
    if req.method=="GET":
        designSave=DesignSave.objects.all()
        designSaveSerializer=DesignSaveSerializer(designSave,many=True)

        return JsonResponse(designSaveSerializer.data,safe=False)
    
    elif req.method=="POST":
         designSave_data=JSONParser().parse(req)
         designSaveSerializer=DesignSaveSerializer(data=designSave_data)

         if designSaveSerializer.is_valid():
             designSaveSerializer.save() 
             return  JsonResponse('added successfully',safe=False)
         return JsonResponse('failed to add',safe=False)
        
    elif req.method=='PUT':
        designSave_data=JSONParser().parse(req)
        designSave=DesignSave.objects.get(DesignId=designSave,data=designSave_data)
        designSaveSerializer=DesignSaveSerializer(designSave,data=designSave_data)

        if designSaveSerializer.is_valid():
            designSaveSerializer.save()
            return JsonResponse('update successfully',safe=False)
        return JsonResponse('fail update')
    
    elif req.method=="DELETE":
        designSave=DesignSave.objects.get(DesignId=id)
        designSave.delete()
        return JsonResponse('delete successfully',safe=False)
    

@csrf_exempt
def SaveFile(req):
    file=req.FILES['file']
    file_name=default_storage(file.name,file)
    return JsonResponse(file_name,safe=False)