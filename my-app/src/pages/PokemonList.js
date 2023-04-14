import React from 'react'
import { Link } from 'react-router-dom'

export const PokemonList = ({ pokemon }) => {
  return (
    <div>
        {
            pokemon && pokemon.map((p, q) => (
                    <div key={q}>
                        <Link to='/componentTwo'>
                        {p}
                        </Link>
                    </div>
            ))
        }
    </div>
  )
}
