import { useLoaderData } from 'react-router-dom'
import { Card } from '../components/UI/Card';

const Movie = () => {
  const movieData = useLoaderData()
  console.log(movieData);

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {
            movieData.Search.map((curMovie) => {
              return <Card key={curMovie.imdbID} curMovie={curMovie} />
            })
          }
        </ul>
      </div>
    </>
  )
}

export default Movie
