from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    return render(request, 'corrector/index.html')


    # data = request.POST.get('your_name')
    # print(data)

    # inputText = data

    # parser = GingerIt()
    # parser.parse(inputText)
    # results = parser.parse(inputText).get("result")
    # entered = parser.parse(inputText).get("text")
