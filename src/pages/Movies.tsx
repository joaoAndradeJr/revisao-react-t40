import { useEffect, useState } from 'react';
import { MovieType, MoviesProps } from '../types';
import { getMovies } from '../services/movieAPI';
import MovieCard from '../components/MovieCard';

export default function Movies({ loading }: MoviesProps) {
  const [movies, setMovies] = useState<MovieType[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      loading.setLoading(true);
      const response = await getMovies();
      setMovies(response as MovieType[]);
      loading.setLoading(false);
    };
    fetchMovies();
  }, []);

  if (loading.loading) return <h1>Loading...</h1>;

  return (
    <main>
      { movies.map((movie) => (
        <MovieCard key={ movie.id } movie={ movie } />
      )) }
    </main>
  );
}
