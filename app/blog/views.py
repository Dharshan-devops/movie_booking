from django.shortcuts import render
from .models import Post
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from django.views import View
from django.views.generic import CreateView,UpdateView,DeleteView
from django.contrib.auth.mixins import UserPassesTestMixin


class  PostListView(View):

    @method_decorator(login_required)
    def get(self,request):
        context={'posts' : Post.objects.all().order_by('-date_posted')}
        return render(request,'blog/home.html', context)
        
    
class PostDetailView(View):
    @method_decorator(login_required)
    def get(self,request,pk):
        context={'posts' : Post.objects.get(id=pk)}
        return render(request,'blog/post_detail.html', context)


class PostCreateView(CreateView):
    model = Post
    fields = ['title','content']
    
    def form_valid(self,form):
        form.instance.author = self.request.user
        return super().form_valid(form)
    

class PostUpdateView(UserPassesTestMixin,UpdateView):
    model = Post
    fields = ['title','content']
    
    def form_valid(self,form):
        form.instance.author = self.request.user
        return super().form_valid(form)    
    
    def test_func(self):
          post= self.get_object()
          if self.request.user == post.author:
              return True
          return False
        

class PostDeleteView(UserPassesTestMixin,DeleteView):
    model=Post
    success_url = '/'
    def test_func(self):
          post= self.get_object()
          if self.request.user == post.author:
              return True
          return False   
      

    

def about(request):
    # return HttpResponse("Hello from Blog about")
    return render(request,'blog/about.html')