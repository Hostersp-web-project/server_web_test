from django.shortcuts import render, redirect
from accountapp.models import Post
from django.utils import timezone

# Create your views here.
def hello_world(request):
    return render(request, 'accountapp/hello_world.html')
def detail(request):
    posts = Post.objects.all()
    return render(request, 'accountapp/detail.html', {'posts':posts})


def upload(request):
    return render(request,'upload.html')

def create(request):
  if request.method=="POST":
    post = Post()
    post.title = request.POST['title']
    post.body = request.POST['body']
    post.date = timezone.now()
    post.image = request.FILES['image']
    post.save()
    
    return redirect('/detail/'+str(post.id),{'post':post})
  else:
    post = Post()
    return render(request,'create.html',{'post':post})
    

