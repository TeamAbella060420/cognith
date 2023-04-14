import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { PokemonList } from '../pages/PokemonList'
import { Link } from 'react-router-dom'

const ComponentOne = () => {

  const [pokemon, setPokemon] = useState([])
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon').then( res => {
      console.log(res.data, 'data');
      setPokemon(res.data.results.map(p => p.name))
    }).catch(err => {
      console.log(err);
    })
  }, [])
  

  return (
    <div>
      <Link to='/'>
        <h1>Home</h1>
      </Link>
        <PokemonList pokemon={pokemon}/>
    </div>
  )
}

export default ComponentOne