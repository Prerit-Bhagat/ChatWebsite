from django.shortcuts import render,redirect
from django.http import JsonResponse
from django.shortcuts import render, redirect ,HttpResponse
from django.http import JsonResponse
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
import json
from django.http import JsonResponse, HttpResponseRedirect
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def Joinroom(request):
    if request.method == "POST":
        body = json.loads(request.body)
        roomname = body.get("roomname")
        if not roomname:
            return JsonResponse({"error": "Room name is required"}, status=400)
        
        print("Room name from frontend:", roomname)
        return JsonResponse({"redirect_to": f"/chat/{roomname}/"})
    
    # For GET requests (fallback)
    roomname = request.GET.get("roomname", "general")
    return HttpResponseRedirect(f'/chat/{roomname}/')

def room(request,room_name):
    return JsonResponse({"roomname": room_name})