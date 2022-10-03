import requests

from django.shortcuts import render
from django.http import JsonResponse
import Constants 
def greeting(request):
    return JsonResponse({"hi":5,"you":"good to go!"})

def search(request):
    
    # Please refer to the instructions at https://developers.google.com/custom-search/v1/using_rest
    # for creating a custom search engine, and getting an API key

    # ****Super important note***: 
    # Do not commit either your custom search engine ID or the api key to the repo!! =)
    print("request", request)
    url = 'https://www.googleapis.com/customsearch/v1?'
    api_key = Constants.API_KEY
    custom_search_engine_id =  Constants.GOOGLE_SEARCH_ID

    search_parameter = request.GET.get("q")
    start = int(request.GET.get("start"))


    if (start <= 0):
        start = 1
    elif (start >= 91):
        start = 1 
    else:
        start

    startString = str(start)

    response = requests.get('{}key={}&cx={}&q={}&start={}'.format(url, api_key, custom_search_engine_id, search_parameter, startString))

    if response.status_code != 200:
        return "Unable to retrieve search results"


    return JsonResponse(response.json())