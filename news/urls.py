from django.urls import path,re_path
from news.views import MainPageView, NewsView , ComingSoonView, CreateView
from . import views
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
  #  path("news/", MainPageView.as_view()),
    path("news/create/", CreateView.as_view()),
    re_path("news/(?P<link_id>[^/]*)/?", NewsView.as_view()),
    path("", ComingSoonView.as_view()),
]
urlpatterns += static(settings.STATIC_URL)

