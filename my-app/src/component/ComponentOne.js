import React, { useState } from 'react'
import { PokemonList } from '../assets/PokemonList'

const ComponentOne = () => {
  const [pokemon, setPokemon] = useState(['bullbazor','charmander'])

  return (
    <div><PokemonList pokemon={pokemon} /></div>
  
  )
}

export default ComponentOne