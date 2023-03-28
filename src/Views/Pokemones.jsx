import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


const Pokemones = () =>{
    const [pokemonList, setPokemonList] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const navigate = useNavigate()

  
    useEffect(() => {
      async function fetchPokemonList() {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
        const data = await response.json();
        setPokemonList(data.results);
      }
      fetchPokemonList();
    }, []);



  function handlePokemonChange(e) {
    setSelectedPokemon(e.target.value);
    navigate(e.target.value)
  }

  
    return (
      <div className="interact">
            <select value={selectedPokemon} onChange={handlePokemonChange}>
            <option value="">Pokemones</option>
            {pokemonList.map(pokemon => (
                <option key={pokemon.name} value={pokemon.name}>{pokemon.name}</option>
            ))}
            </select>
        </div>
    );
  }

export default Pokemones;       