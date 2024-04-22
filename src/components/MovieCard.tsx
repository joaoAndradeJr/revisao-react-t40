import { Link } from 'react-router-dom';
import { MovieCardProps } from '../types';
import '../css/MovieCard.css';

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <Link to={ `/movie/${movie.id}` } className="movie-container">
      <img src={ movie.image } alt={ movie.title } className="movie-cover" />
      <h2 className="movie-title">{ movie.title }</h2>
      <h5 className="rating">{ movie.rating }</h5>
    </Link>
  );
}
