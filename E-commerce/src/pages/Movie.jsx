import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Movie = () => {
  const movieData = useLoaderData()
  console.log(movieData);
  
  return (
    <div>
      <h1></h1>
      {

      }
    </div>
  )
}

export default Movie
