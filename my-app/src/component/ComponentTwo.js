import React from 'react'
import { Link } from 'react-router-dom'

const ComponentTwo = () => {
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