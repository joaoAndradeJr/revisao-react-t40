import { Link } from 'react-router-dom';
import { MovieCardProps } from '../types';

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <Link to={ `/movie/${movie.id}` }>
      <img src={ movie.imagePath } alt={ movie.title } />
      <h2>{ movie.title }</h2>
      <h3>{ movie.subtitle }</h3>
      <p>{ movie.storyline }</p>
      <span>{ movie.rating }</span>
      <span>{ movie.genre }</span>
    </Link>
  );
}
