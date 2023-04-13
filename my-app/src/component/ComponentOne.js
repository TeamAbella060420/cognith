import React, { useState, useEffect } from 'react'
import { PokemonList } from '../assets/PokemonList'
import axios from 'axios'

const ComponentOne = () => {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon').then( res => {
    setPokemon(res.data.results.map(p => (
      <li>
        {p.name}
      </li>
    )))
  })
  }, [])
  

  return (
    <div><PokemonList pokemon={pokemon} /></div>
  
  )
}

export default ComponentOne