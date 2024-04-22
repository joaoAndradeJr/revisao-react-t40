import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { LoadingProps, MovieType } from '../types';
import { getMovie } from '../services/movieAPI';
import Loading from '../components/Loading';
import '../css/MovieDetails.css';
import Button from '../components/Button';

export default function MovieDetails({ loading }: LoadingProps) {
  const [movie, setMovie] = useState<MovieType | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      loading.setLoading(true);
      const movie = await getMovie(id);
      setMovie(movie as MovieType);
      loading.setLoading(false);
    }
    fetchMovieDetails();
  }, [id]);

  if (loading.loading) return <Loading />;

  return (
    <main className="movie-details">
      {movie && (
        <section className="movie-details-card">
          <img src={ movie.image } alt={ movie.title } />
          <h2>{ movie.title }</h2>
          <p>{ movie.storyline }</p>
          <span className="rating">{ movie.rating }</span>
          <div className="tags-container">
            { movie.genre.map((genre) => (
              <span className="genre" key={ genre }>{ genre }</span>
            )) }
          </div>
          <div>
            <Button
              className="button"
              onClick={ () => navigate(`/movie/edit/${id}`) }
              value="Editar"
            />
            <Button
              className="button"
              onClick={ () => navigate('/movies') }
              value="Voltar"
            />
          </div>
        </section>
      )}
    </main>
  );
}
