# Pocket Monsters
Flask API backend that hits the [PokeAPI](https://pokeapi.co/) from searchs input in the React frontend.

Ensure you have environment variables set up for your flask app in a .env.
If not, inside the API folder:

`source venv/bin/activate`

`EXPORT FLASK_APP=api.py`

`EXPORT FLASK_ENV=development`

Then, in the root directory start the Flask API:

`npm run start-api`

And start the frontend:

`npm run start`

Access the React development server on port 3000 of localhost, the Flask backend will be running on port 5000.
