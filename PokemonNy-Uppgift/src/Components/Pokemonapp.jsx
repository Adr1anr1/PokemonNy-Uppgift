import React, { useState, useEffect } from 'react';
import Pokemon from './Pokemon';
function PokemonApp(props) {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState('');
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    async function getPokemonList() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
      const data = await response.json();
      setPokemonList(data.results);
    }
    getPokemonList();
  }, []);

  async function fetchPokemon() {
    if (!selectedPokemon) {
      alert('Please select a Pokemon');
      return;
    }
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`);
    const data = await response.json();
    setPokemonData(data);
  }

  return (
    <div className="app">
      {pokemonData ? (
        <div>
          <Pokemon data={pokemonData} />
        </div>
      ) : (
        <div>
          <h1 className="title">Pokemon Fetch App</h1>
          <select className="dropdown" onChange={(e) => setSelectedPokemon(e.target.value)}>
            <option value="">Choose a Pokemon</option>
            {pokemonList.map((pokemon, index) => (
              <option key={index} value={pokemon.name}>{pokemon.name}</option>
            ))}
          </select>
          <button className="button" onClick={fetchPokemon}>Fetch pokemon</button>
        </div>
      )}
      <button className="button" onClick={props.goHome}>Go Home</button>
    </div>
  );
}

export default PokemonApp;
