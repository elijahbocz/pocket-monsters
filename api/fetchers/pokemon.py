import requests
import json


# Identifier can either be the name of pokemon or corresponding id
def fetch_pokemon_by_identifier(identifier):
    url = "https://pokeapi.co/api/v2/pokemon/" + str(identifier)

    response = requests.request("GET", url)

    return json.loads(response.text)

