from django.shortcuts import render
from django.conf import settings
import datetime
import json
from django.http import HttpResponse, Http404
from django.views import View
import random

from collections import defaultdict
from django.shortcuts import redirect

# Create your views here.





class MainPageView(View):

    def get(self, request, *args, **kwargs):

        listofdates=[]

        date = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")

        with open(settings.NEWS_JSON_PATH, "r") as json_file:
            news_article = json.load(json_file)

        for ele in news_article:
            tempdate = datetime.datetime.strptime(ele["created"], '%Y-%m-%d %H:%M:%S')
            tempdate = tempdate.strftime("%Y-%m-%d")
            ele["only_date"] = tempdate
            listofdates.append(tempdate)

        news_article.sort(key=lambda x:x['created'])
        news_article.reverse()

        news_article_sublist = [news_article[n:n+8] for n in range(0, len(news_article), 8)]

        listofdates = list(set(listofdates))
        listofdates.sort()
        listofdates.reverse()

        context = {"news_article": news_article_sublist, "listofdates": listofdates, "q":request.GET.get('q')}

        return HttpResponse(news_article_sublist);
        # return render(request, "search.html", context=context)


        # html = "<h2>Hyper news</h2>"
        #
        # html = html + f"""<form action="" method="get">
        #         <input type="text" name="q">
        #         <button type="submit">Search</button>
        #         </form>"""
        #
        # for dt in listofdates:
        #
        #     if not request.GET.get('q'):
        #         html = html + f"<h4>{dt}</h4><ul>"
        #
        #         for ele in news_article:
        #             if dt in ele["only_date"]:
        #                 link_id = int(ele["link"])
        #                 title = ele["title"]
        #                 html = html + f"<li><a href='/news/{link_id}/'>{title}</a></li>"
        #         html = html + f"</ul>"
        #
        #     else:
        #
        #          for ele in news_article:
        #              if dt in ele["only_date"] and request.GET.get('q') in ele["title"]:
        #                 html = html + f"<h4>{dt}</h4><ul>"
        #                 link_id = int(ele["link"])
        #                 title = ele["title"]
        #                 html = html + f"<li><a href='/news/{link_id}/'>{title}</a></li>"
        #
        #          html = html + f"</ul>"
        #
        # html = html + f"<a target='_blank' target='_blank' href='/news/create/'>Create you own article</a>"
        #
        # return HttpResponse(html)









class NewsView(View):

    def get(self, request, link_id, *args, **kwargs):

        with open(settings.NEWS_JSON_PATH, "r") as json_file:
            news_article = json.load(json_file)

        for ele in news_article:
            if int(link_id) == int(ele["link"]):

                created = ele["created"]
                text = ele["text"]
                title = ele["title"]

                news_info = "".join(
                    f"<h2>{title}</h2><p>{created}</p><p>{text}</p><a target='_blank' target='_blank' href='/news/'>The link</a>"
                )
                return HttpResponse(news_info)


class ComingSoonView(View):

    def get(self, request, *args, **kwargs):
        listofdates=[]

        date = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")

        with open(settings.NEWS_JSON_PATH, "r") as json_file:
            news_article = json.load(json_file)

        for ele in news_article:
            tempdate = datetime.datetime.strptime(ele["created"], '%Y-%m-%d %H:%M:%S')
            tempdate = tempdate.strftime("%Y-%m-%d")
            ele["only_date"] = tempdate
            listofdates.append(tempdate)

        news_article.sort(key=lambda x:x['created'])
        news_article.reverse()

        news_article_sublist = [news_article[n:n+8] for n in range(0, len(news_article), 8)]

        listofdates = list(set(listofdates))
        listofdates.sort()
        listofdates.reverse()

        context = {"news_article": news_article_sublist, "listofdates": listofdates, "q":request.GET.get('q')}
        return render(request, "search.html", context=context)

    def post(self, request, *args, **kwargs):
        title = request.POST.get('title')
        text = request.POST.get('text')



        date = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")

        with open(settings.NEWS_JSON_PATH, "r") as json_file:
            news_article = json.load(json_file)

        list_of_link = []

        for ele in news_article:
            list_of_link.append(int(ele["link"]))
        link_id = list_of_link[0]
        while link_id in list_of_link:
            link_id = random.randint(1, 100000)

        file1 = request.FILES['myfile']

        filepath = settings.NEWS_IMAGES_PATH+str(link_id)
        with open(filepath, "wb") as dest:
            dest.write(file1.read())

        imagesrc = "../static/news_images/"+str(link_id)


        new_article = {
            "created": date,
            "text": text,
            "title": title,
            "link": link_id,
            "imgsrc": imagesrc,
        }

        news_article.append(new_article)
        with open(settings.NEWS_JSON_PATH, "w") as json_file:
            json.dump(news_article, json_file)

        return redirect('/#viewnews')

class CreateView(View):
    def get(self, request):
        return render(request, 'CreateArticles.html')


