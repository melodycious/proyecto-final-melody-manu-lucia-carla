// MovieDetail.jsx
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../store/appContext.js';

const MovieDetail = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=es-ES`, {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTUwZDQyNjQ2NGQxOGY0ZGRjMGM3ZWEwZjFjNTU2MyIsInN1YiI6IjY2NDI0ZTQ3M2MzMGM1ZjRhYzNhMWQ3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1qYEcWtzCfR7JEiJLg5B4Nn9WdrFrwydfN68kLVNf-o'
        }
      });
      const result = await response.json();
      setMovie(result);
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) return <div>Cargando...</div>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      {/* Agrega más detalles según sea necesario */}
    </div>
  );
};

export default MovieDetail;
