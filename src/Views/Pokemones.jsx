import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


const Pokemones = () =>{
    const [pokemonList, setPokemonList] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [selectedPokemonDetails, setSelectedPokemonDetails] = useState(null);
    const {id} = useParams();
    const navigate = useNavigate();

  
    useEffect(() => {
      async function fetchPokemonList() {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
        const data = await response.json();
        setPokemonList(data.results);
      }
      fetchPokemonList();
    }, []);

    useEffect(() => {
        async function fetchPokemonDetails() {
          if (!selectedPokemon) {
            setSelectedPokemonDetails(null);
            return;
          }
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`);
          const data = await response.json();
          setSelectedPokemonDetails(data);
        }
        fetchPokemonDetails();
      }, [selectedPokemon]);
  
    function handlePokemonChange(e) {
      setSelectedPokemon(e.target.value);
    }

    function handleViewDetailsClick() {
        if(selectedPokemonDetails){
          navigate(`/pokemon/${selectedPokemonDetails.id}`)
        };
      }
  
    return (
      <div className="interact">
            <select value={selectedPokemon} onChange={handlePokemonChange}>
            <option value="">Pokemones</option>
            {pokemonList.map(pokemon => (
                <option key={pokemon.name} value={pokemon.name}>{pokemon.name}</option>
            ))}
            </select>
            <button onClick={handleViewDetailsClick}>Ver Pokémon</button>
                {selectedPokemonDetails && (
                    <div className="selectedPokemon">
                        <div className="selectedImage">
                         <img src={selectedPokemonDetails.sprites.front_default} alt={selectedPokemonDetails.name} />
                        </div>
                        <div className="selectedStats">
                            <h2>{selectedPokemonDetails.name}</h2>
                            <h3>Number: {selectedPokemonDetails.id}</h3>
                            <p>Type: {selectedPokemonDetails.types.map(type => type.type.name).join(', ')}</p>
                            <p>Attack: {selectedPokemonDetails.stats.find(stat => stat.stat.name === 'attack').base_stat}</p>
                            <p>Defense: {selectedPokemonDetails.stats.find(stat => stat.stat.name === 'defense').base_stat}</p>
                            <p>Speed: {selectedPokemonDetails.stats.find(stat => stat.stat.name === 'speed').base_stat}</p>
                            <p>Abilities:</p>
                            <ul>
                                {selectedPokemonDetails.abilities.map(ability => (
                                <li key={ability.ability.name}>{ability.ability.name}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
        </div>
    );
  }

export default Pokemones;       