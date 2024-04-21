import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Movies from './pages/Movies';
import MovieDetails from './pages/MovieDetails';
import { useState } from 'react';

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/movie/:id" element={ <MovieDetails loading={ { loading, setLoading } } /> } />
      <Route path="/movies" element={ <Movies loading={ { loading, setLoading } } /> } />
      <Route path="*" element={ <h1>Not Found</h1> } />
    </Routes>
  );
}

export default App;
