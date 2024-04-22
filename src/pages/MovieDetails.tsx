import { useEffect, useState } from 'react'
import { getMovie } from '../services/movieAPI';
import { useParams } from 'react-router-dom';
import MovieCard from '../components/MovieCard';

export default function MovieDetails() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const details = await getMovie(id);
      setMovie(details);
    };
    fetchMovieDetails();
  }, []);

  return (
    <main>
      { movie.genre && (
          <MovieCard movie={ movie } full />
        ) }
    </main>
  )
}
