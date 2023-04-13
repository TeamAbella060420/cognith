import React from 'react'

export const PokemonList = ({ pokemon }) => {
  return (
    <div>
      {pokemon.map((data, index) => (
        <div key={index}>
          {data}
        </div>
      ))}
    </div>
  )
}

