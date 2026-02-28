import { useLoaderData } from 'react-router-dom'
import { Card } from '../components/UI/Card';

const Movie = () => {
  const movieData = useLoaderData()
  console.log(movieData);

  return (
    <div>
      <h1> Movie Page </h1>
      {
        movieData.Search.map((curMovie) => {
          return <Card key={curMovie.imdbID} curMovie = {curMovie}   />
        })
      }
    </div>
  )
}

export default Movie
