import { useEffect, useState } from 'react'
import { getMovies } from '../services/movieAPI';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';

export default function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const result = await getMovies();
      setMovies(result);
      console.log(result)
    };
    fetchMovies();
  }, []);

  return (
    <main>
      { movies.map((movie) => (
        <Link to={ `/movie/${movie.id}` } key={ movie.id }>
          <MovieCard movie={ movie } />
        </Link>
      )) }
    </main>
  );
}
