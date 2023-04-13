import React from 'react'

export const PokemonList = ({ pokemon }) => {
  return (
    <div>
      {pokemon.map(data => (
        <li>{data}</li>
      ))}
    </div>
  )
}

