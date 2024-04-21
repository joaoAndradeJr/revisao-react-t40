import { Link } from 'react-router-dom';
import { MovieCardProps } from '../types';
import '../css/MovieCard.css';

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <Link to={ `/movie/${movie.id}` } className="movie-container">
      <h2>{ movie.title }</h2>
      <img src={ movie.image } alt={ movie.title } className="movie-cover" />
      <div className="rating-container">
        Rating:
        <span className="rating">{ movie.rating }</span>
      </div>
    </Link>
  );
}
