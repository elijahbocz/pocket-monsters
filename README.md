#Pocket Monsters
Flask API backend that hits the [PokeAPI](https://pokeapi.co/) for search from the React frontend.

Ensure you have environment variables set up for your flask app in a .env.
If not, inside the API folder:

`source venv/bin/activate`

`EXPORT FLASK_APP=api.py`

`EXPORT FLASK_ENV=development`

Then, start the Flask API:

`npm run start-api`

And start the frontend:

`npm run start`

Access the development server on port 3000 of localhost, the flask backend will be running on port 5000.
