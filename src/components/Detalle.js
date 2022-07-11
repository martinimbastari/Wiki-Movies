import React from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from "axios";
import Header from "./Header";

import '../css/detalle.css';

export default function Detalle() {
  const navigate = useNavigate();

  let query = new URLSearchParams(window.location.search);

  let movieID = query.get('movieID');

  const [movie, setMovie] = useState(null);
  console.log(movie)

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=05b7bce64d5b68a034314fc39fdefe74&language=es-ES`;
    axios.get(endPoint)
        .then(response => {
            const movieData = response.data;
            setMovie(movieData);
        })
        .catch(error => {
            // console.log(error)
        })
  }, [movieID]);


  return (
  <>
    {!movie && <p>Cargando...</p>}
    {movie && 
      <>
      <div className='container-fluid contenedor-detalle p-0  w-100 text-white ' style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`}} >
      <Header/>
        <div className='row box w-100 m-0'>
          <div className='col-lg-3'>
          <img className="img-fluid" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie poster"/>
          </div>
          <div className='col-lg-8 col-sm-12  contenedorInfo my-3'>
          <h6 className='my-1 text-white'> <span className='text-white'>{movie.release_date}</span></h6>
            <h2 className='my-4'>{movie.title}</h2>
            
            <ul className='d-flex gap-2 p-0'>
              { movie.genres.map(oneGenre => 
                <li>{oneGenre.name}</li>
              )}
            </ul>
            {/* <h5 className='text-secondary'>Reseña:</h5> */}
            <p className='my-4'>{movie.overview}</p>
            { movie.spoken_languages.map(language => 
                <span className='mx-1 '>{language.english_name}</span>
              )}
            <div className='d-flex p-0 gap-3 my-2 '>
            <span className='text-white '>🕛{movie.runtime}min</span>
            <span className='text-white '>⭐{movie.vote_average}/10</span>
            </div>
            <button className='btn btn-danger my-4 mx-2'>
              <a className='play' target='_blank' href={`${movie.homepage}`}>Ver pelicula</a>
              </button>
              <button className='btn btn-dark my-4'>
              <a className='play' target='_blank' href={`${movie.homepage}`}>Ver Trailer</a>
              </button>
          </div>
        </div>
        </div>
      </>

      }
  </>
  )
}
