import React from 'react'
import { Link } from 'react-router-dom'

const ComponentTwo = ({pokemon}) => {
  const myproduct = pokemon.find((item) => item.data.results === id);

  return (
    <>
      <Link to='/'>
      <h1>Home</h1>
      </Link>
      <div>ComponentTwo</div>
    </>
  )
}

export default ComponentTwo