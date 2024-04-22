import { useEffect, useState } from 'react';
import { LoadingProps, MovieType } from '../types';
import { getMovies } from '../services/movieAPI';
import MovieCard from '../components/MovieCard';
import '../css/Movies.css';
import Loading from '../components/Loading';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

export default function Movies({ loading }: LoadingProps) {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      loading.setLoading(true);
      const response = await getMovies();
      setMovies(response as MovieType[]);
      loading.setLoading(false);
    };
    fetchMovies();
  }, []);

  if (loading.loading) return <Loading />;

  return (
    <main>
      <h1 className="title">Os 10 filmes mais assistidos da semana</h1>
      <section className="movies-list">
        { movies.map((movie) => (
          <MovieCard key={ movie.id } movie={ movie } />
        )) }
      </section>
      <Button
        value="Adicionar filme"
        className="edit-button"
        onClick={ () => navigate('/movie/add') }
      />
    </main>
  );
}
