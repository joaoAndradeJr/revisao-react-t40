import { useEffect, useState } from 'react';
import { LoadingProps, MovieType, movieInitialState } from '../types';
import Loading from '../components/Loading';
import Input from '../components/Input';
import { useNavigate, useParams } from 'react-router-dom';
import { getMovie, updateMovie } from '../services/movieAPI';
import Button from '../components/Button';
import '../css/EditMovies.css';

export default function EditMovies({ loading }: LoadingProps) {
  const [state, setState] = useState<MovieType>(movieInitialState);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovie = async () => {
      loading.setLoading(true);
      const response = await getMovie(id);
      setState(response as MovieType);
      loading.setLoading(false);
    }
    fetchMovie();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id: movieId, value } = e.target;
    if (movieId === 'genre') {
      const genre = value.split(',') || [value];
      setState({ ...state, genre });
      return;
    }
    setState({ ...state, [movieId]: value });
  };

  const handleClick = async () => {
    loading.setLoading(true);
    await updateMovie(state);
    loading.setLoading(false);
    navigate('/movies');
  };

  if (loading.loading) return <Loading />;

  return (
    <main className="edit-movies-container">
      <h1>Edição de filme</h1>
      {
        <form className="form">
          <Input
            id="title"
            placeholder="Título"
            value={ state.title }
            onChange={ handleChange }
            className="edit-movie-input"
          />
          <Input
            id="description"
            type="textarea"
            placeholder="Descrição"
            value={ state.storyline }
            onChange={ handleChange }
            className="edit-movie-input"
          />
          <Input
            id="genre"
            placeholder="Gênero"
            value={ state.genre.join(',') }
            onChange={ handleChange }
            className="edit-movie-input"
          />
          <Input
            id="release"
            placeholder="Lançamento"
            value={ String(state.rating) }
            onChange={ handleChange }
            className="edit-movie-input"
          />
          <Input
            id="image"
            placeholder="Link da Capa"
            value={ state.image }
            onChange={ handleChange }
            className="edit-movie-input"
          />
          <Button
            value="Editar filme"
            onClick={ handleClick }
            className="edit-button"
          />
        </form>
      }
    </main>
  );
}
