import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from "axios";
import Header from "./Header";

import '../css/detalle.css';

export default function Detalle() {
  const navigate = useNavigate();


  let query = new URLSearchParams(window.location.search);

  let movieID = query.get('movieID');

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=05b7bce64d5b68a034314fc39fdefe74&language=es-ES`;
    console.log(endPoint)
    axios.get(endPoint)
        .then(response => {
            const movieData = response.data;
            setMovie(movieData);
        })
        .catch(error => {
            console.log(error)
        })
  }, [movieID]);


  return (
  <>
    {!movie && <p>Cargando...</p>}
    {movie && 
      <>
      <Header/>
      <div className='container-fluid text-white box'>
        
        <div className='row px-5'>
          <div className='col-lg-3'>
          <img className="img-fluid" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie poster"/>
          </div>
          <div className='col-8 contenedorInfo my-3'>
            <h2 className='my-2'>{movie.title}</h2>
            <h5 className='my-4 text-secondary'>Fecha de estreno: <span className='text-white'>{movie.release_date}</span></h5>
            <h5 className='text-secondary'>Reseña:</h5>
            <p className='my-4'>{movie.overview}</p>
            <h5 className='my-4 text-secondary'>Puntuacion: <span className='text-white'>{movie.vote_average}⭐</span></h5>
            <h5 className='text-secondary'>Generos:</h5>
            <ul>
              { movie.genres.map(oneGenre => 
                <li>{oneGenre.name}</li>
              )}
            </ul>
          </div>
        </div>
        </div>
      </>

      }
  </>
  )
}
