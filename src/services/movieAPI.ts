import { MovieType } from "../types";

const readMovies = () => JSON.parse(localStorage.getItem('movies') || '[]');
const saveMovies = (movies: MovieType[]) => localStorage.setItem('movies', JSON.stringify(movies));

const TIMEOUT = 2000;
const SUCCESS_STATUS = 'OK';

// --------------------------------------------------------------------
// A função simulateRequest simula uma requisição para uma API externa
// Esse tipo de função que "chama outra função" é chamada de
// "currying function" https://javascript.info/currying-partials
// não se preocupe, estudaremos isso mais futuramente
// --------------------------------------------------------------------

const simulateRequest = (response: any) => (callback: any) => {
  setTimeout(() => {
    callback(response);
  }, TIMEOUT);
};

export const getMovies = () => (
  new Promise((resolve) => {
    const movies = readMovies();
    simulateRequest(movies)(resolve);
  })
);

export const getMovie = (movieId: string) => {
  const movie = readMovies().find((mov: MovieType) => mov.id === parseInt(movieId, 10));
  return new Promise((resolve) => {
    simulateRequest(movie)(resolve);
  });
};

export const updateMovie = (updatedMovie: MovieType) => (
  new Promise((resolve) => {
    const movies = readMovies().map((movie: MovieType) => {
      if (movie.id === updatedMovie.id) {
        return { ...movie, ...updatedMovie };
      }
      return movie;
    });
    saveMovies(movies);
    simulateRequest(SUCCESS_STATUS)(resolve);
  })
);

export const createMovie = (movieData: MovieType) => (
  new Promise((resolve) => {
    let movies = readMovies();
    const nextId = movies[movies.length - 1].id + 1;
    const newMovie = { ...movieData, id: nextId };
    movies = [...movies, newMovie];
    saveMovies(movies);
    simulateRequest(SUCCESS_STATUS)(resolve);
  })
);

export const deleteMovie = (movieId: number) => {
  let movies: MovieType[] = readMovies();
  movies = movies.filter((movie) => movie.id !== movieId);
  saveMovies(movies);

  return new Promise((resolve) => {
    simulateRequest({ status: SUCCESS_STATUS })(resolve);
  });
};
