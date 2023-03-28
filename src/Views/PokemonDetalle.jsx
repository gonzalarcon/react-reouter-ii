import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";


export const PokemonDetalle = () => {
  const navigate = useNavigate()
  const {id} = useParams();
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [selectedPokemonDetails, setSelectedPokemonDetails] = useState(null);
  const [showDetails, setShowDetails] = useState(false)


  useEffect(() => {
    async function fetchPokemonDetails() {
      if (!id) {
        setSelectedPokemonDetails(null);
        return;
      }
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      setSelectedPokemonDetails(data);
    }
    fetchPokemonDetails();
  }, [id]);


  function handleViewDetailsClick() {
    setShowDetails(prevState => {
      return !prevState
    })
  }

  const handleBack = () => {
    navigate('/pokemones')
  }

  return (
    <>
        <div className="buttons">
          <button onClick={handleBack}>Elegir de nuevo</button>
          <button onClick={handleViewDetailsClick}>Ver Pokémon</button>
        </div>
      {(showDetails) && (
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
    </>
  )
}