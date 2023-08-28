from django.shortcuts import render
from .models import Profile
from django.shortcuts import redirect

# Create your views here.
def hello_world(request):
    return render(request, 'accountapp/hello_world.html')


def upload(request):
    return render(request,'upload.html')

def upload_create(request):
    form=Profile()
    form.title=request.POST['title']
    try:
        form.image=request.FILES['images']
    except: #이미지가 없어도 그냥 지나가도록-!
        pass
    form.save()
    return redirect('/hello_world/profile/')

def profile(request):
    profile=Profile.objects.all()
    return render(request,'profile.html',{'profile':profile})

