import { useEffect, useState } from 'react';
import { LoadingProps, MovieType, movieInitialState } from '../types';
import Loading from '../components/Loading';
import Input from '../components/Input';
import { useParams } from 'react-router-dom';
import { getMovie } from '../services/movieAPI';
import Button from '../components/Button';
import '../css/EditMovies.css';

export default function EditMovies({ loading }: LoadingProps) {
  const [state, setState] = useState<MovieType>(movieInitialState);
  const { id } = useParams();

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
    setState({ ...state, [movieId]: value });
  };

  if (loading.loading) return <Loading />;

  return (
    <main className="edit-movies-container">
      <h1>Edição de filme</h1>
      {
        <form>
          <Input
            id="title"
            placeholder="Título"
            value={ state.title }
            onChange={ handleChange }
          />
          <Input
            id="description"
            placeholder="Descrição"
            value={ state.storyline }
            onChange={ handleChange }
          />
          <Input
            id="genre"
            placeholder="Gênero"
            value={ state.genre.join(',') }
            onChange={ handleChange }
          />
          <Input
            id="release"
            placeholder="Lançamento"
            value={ String(state.rating) }
            onChange={ handleChange }
          />
          <Button
            value="Editar filme"
            onClick={ () => console.log('Edit movie') }
          />
        </form>
      }
    </main>
  );
}
