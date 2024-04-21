import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MovieType, MoviesProps } from '../types';
import { getMovie } from '../services/movieAPI';

export default function MovieDetails({ loading }: MoviesProps) {
  const [movie, setMovie] = useState<MovieType | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      loading.setLoading(true);
      const movie = await getMovie(id);
      setMovie(movie as MovieType);
      loading.setLoading(false);
    }
    fetchMovieDetails();
  }, [id]);

  if (loading.loading) return <h1>Loading...</h1>;

  return (
    <main>
      {movie && (
        <div>
          <img src={ movie.image } alt={ movie.title } />
          <h2>{ movie.title }</h2>
          <p>{ movie.storyline }</p>
          <span>{ movie.rating }</span>
          <div>
            { movie.genre.map((genre) => (
              <span key={ genre }>{ genre }</span>
            )) }
          </div>
        </div>
      )}
    </main>
  );
}
