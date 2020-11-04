import requests

from django.shortcuts import render
from django.http import JsonResponse

def greeting(request):
    return JsonResponse({"hi":5,"you":"good to go!"})

def search(request):
    
    # Please refer to the instructions at https://developers.google.com/custom-search/v1/using_rest
    # for creating a custom search engine, and getting an API key

    # ****Super important note***: 
    # Do not commit either your custom search engine ID or the api key to the repo!! =)

    url = 'https://www.googleapis.com/customsearch/v1?'
    api_key = 'INSERT YOUR API KEY HERE' 
    custom_search_engine_id =  'INSERT YOUR CUSTOM SEARCH ENGINE ID HERE'

    search_parameter = request.GET.get("q")
    response = requests.get('{}key={}&cx={}&q={}'.format(url, api_key, custom_search_engine_id, search_parameter))
    if response.status_code != 200:
        return "Unable to retrieve search results"

    return JsonResponse(response.json())