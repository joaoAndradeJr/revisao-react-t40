import { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import { LoadingProps, MovieType, movieInitialState } from '../types';
import { useNavigate } from 'react-router-dom';
import { createMovie } from '../services/movieAPI';
import Loading from '../components/Loading';

export default function AddMovie({ loading }: LoadingProps) {
  const [state, setState] = useState<MovieType>(movieInitialState);
  const navigate = useNavigate();

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
    await createMovie(state);
    loading.setLoading(false);
    navigate('/movies');
  };

  if (loading.loading) return <Loading />;

  return (
    <form className="form">
      <Input
        id="title"
        placeholder="Título"
        value={ state.title }
        onChange={ handleChange }
        className="edit-movie-input"
      />
      <Input
        id="storyline"
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
        id="rating"
        placeholder="Qualificação"
        type="number"
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
        value="Adicionar filme"
        onClick={ handleClick }
        className="edit-button"
      />
    </form>
  );
}
