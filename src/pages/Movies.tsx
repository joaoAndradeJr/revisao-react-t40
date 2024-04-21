import { useEffect, useState } from 'react';
import { MovieType } from '../types';
import { getMovies } from '../services/movieAPI';
import MovieCard from '../components/MovieCard';

export default function Movies() {
  const [movies, setMovies] = useState<MovieType[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await getMovies();
      setMovies(response as MovieType[]);
    };
    fetchMovies();
  }, []);

  return (
    <main>
      { movies.map((movie) => (
        <MovieCard key={ movie.id } movie={ movie } />
      )) }
    </main>
  );
}
