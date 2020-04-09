from flask import Flask
from flask_caching import Cache
import requests
import json

config = {
    "DEBUG": True,
    "CACHE_TYPE": "simple",
    "CACHE_DEFAULT_TIMEOUT": 300
}

app = Flask(__name__)
app.config.from_mapping(config)
cache = Cache(app)


# Identifier can either be the name of pokemon or corresponding id
@cache.memoize(50)
def fetch_pokemon_by_identifier(identifier):
    url = "https://pokeapi.co/api/v2/pokemon/" + str(identifier)
    response = requests.request("GET", url)

    return json.loads(response.text)


@cache.memoize(50)
def fetch_item_by_identifier(identifier):
    identifier = str(identifier).replace(" ", "-").lower()
    url = "https://pokeapi.co/api/v2/item/" + identifier
    response = requests.request("GET", url)

    return json.loads(response.text)


@app.route('/poke/<identifier>')
def get_pokemon(identifier):
    return {'pokemon': fetch_pokemon_by_identifier(identifier)}


@app.route('/items/<identifier>')
def get_item(identifier):
    return fetch_item_by_identifier(identifier)
