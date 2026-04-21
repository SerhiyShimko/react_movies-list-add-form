import './App.scss';
import { MoviesList } from './components/MoviesList';
import { NewMovie } from './components/NewMovie';
import moviesFromServer from './api/movies.json';
import { Movie } from './types/Movie';
import { useState } from 'react';

export function creatNewMovies(newMovie: Movie) {
  const newMovies: Movie[] = [...moviesFromServer, newMovie];

  return newMovies;
}

export const App = () => {
  const [newMovies, setNewMovies] = useState(moviesFromServer);
  const [count, setCount] = useState(0);

  return (
    <div className="page">
      <div className="page-content">
        <MoviesList movies={newMovies} />
      </div>
      <div className="sidebar">
        <NewMovie
          onAdd={(movie: Movie) => {
            setNewMovies(creatNewMovies(movie));
            setCount(prev => prev + 1);
          }}
          countForm={count}
        />
      </div>
    </div>
  );
};
