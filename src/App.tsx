import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/movies" element={ <Movies /> } />
      <Route path="/movie/:id" element={ <MovieDetails /> } />
    </Routes>
  );
}

export default App;
