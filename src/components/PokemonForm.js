import React, { useState, useEffect } from 'react';

function PokemonForm(props) {
  const [search, setSearch] = useState("");
  const [pokemonId, setPokemonId] = useState(0);
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonImages, setPokemonImages] = useState({});
  const [pokemonHeight, setPokemonHeight] = useState(0);
  const [pokemonWeight, setPokemonWeight] = useState(0);
  const [pokemonTypes, setPokemonTypes] = useState([]);
  const [gameIndices, setGameIndices] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = '/poke/' + search;
    fetch(url).then(res => res.json()).then(data => {
      setPokemonId(data.pokemon.id);
      setPokemonName(data.pokemon.name);
      setPokemonImages(data.pokemon.sprites);
      setPokemonTypes(data.pokemon.types);
      setGameIndices(data.pokemon.game_indices)
      setPokemonHeight(data.pokemon.height);
      setPokemonWeight(data.pokemon.weight);
    })
  }

  useEffect(() => {
    fetch('/poke/bulbasaur').then(res => res.json()).then(data => {
      console.log(data)
      setPokemonId(data.pokemon.id);
      setPokemonName(data.pokemon.name);
      setPokemonImages(data.pokemon.sprites);
      setPokemonTypes(data.pokemon.types);
      setGameIndices(data.pokemon.game_indices)
      setPokemonHeight(data.pokemon.height);
      setPokemonWeight(data.pokemon.weight);
    })
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Search Pokemon:
        <p><input type="text" value={search} onChange={e => setSearch(e.target.value)} /></p>
      </label>
      <input type="submit" value="Search" />
      <p>{pokemonName.toLocaleUpperCase()}</p>
      <p>ID: {pokemonId}</p>
      <p>
        {pokemonTypes.map((element, i) => {
          // Return the element. Also pass key     
          return (<span key={i}>{element.type.name}/</span>)
        })}
      </p>
      <p><span>Height: {(((pokemonHeight * 10) / 2.54) / 12).toFixed(2)}ft</span><span>, Weight: {((pokemonWeight * 100) / 454).toFixed(2)}lbs</span></p>
      <img src={pokemonImages.front_default} alt={pokemonName}></img>
      <img src={pokemonImages.back_default} alt={pokemonName}></img>
      <p></p>
      <img src={pokemonImages.front_shiny} alt={pokemonName}></img>
      <img src={pokemonImages.back_shiny} alt={pokemonName}></img>
      <p>Found in:</p>
      <p>
        {gameIndices.map((element, i) => {
          // Return the element. Also pass key     
          return (<span key={i}>{element.version.name}, </span>)
        })}
      </p>
    </form>
  );
}

export default PokemonForm;