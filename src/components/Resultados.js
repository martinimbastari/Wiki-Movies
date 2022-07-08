import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from '@sweetalert/with-react';
import Header from './Header';

export default function Resultados() {

    let query = new URLSearchParams(window.location.search);
    let keyword = query.get('keyword');

    const [moviesResults, setMoviesResults] = useState([]);

    useEffect(() => {
        const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=05b7bce64d5b68a034314fc39fdefe74&language=es-ES&query=${keyword}`;
        axios.get(endPoint)
            .then(response => {
             const moviesArray = response.data.results;

             if(moviesArray.length === 0) {
                 swal(<h4>Tu busqueda no tuvo resultados</h4>)
             }
                setMoviesResults(moviesArray);
        })
        .catch(error => console.log(error))
    }, [keyword]);

    // https://api.themoviedb.org/3/search/movie?api_key=05b7bce64d5b68a034314fc39fdefe74&language=en-US&page=1&include_adult=false&query=¿?


  return (
      <>
      <Header/>
        <h2 className='px-5 py-2 text-white'>Buscaste: <em>{keyword}</em></h2>
        {moviesResults.length === 0 && <h3>No se encontraron resultados</h3>}
        <div className="row px-5">
            {
                moviesResults.map((oneMovie, idx) =>{
                    return(
                        // <div className="col-lg-2" key={idx}>
                        // <div className="card my-4" >
                        //      <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} alt="Card image cap"/>
                        //  <div className="card-body">
                        //      <h5 className="card-title">{oneMovie.title}</h5>
                        //      {/* <p className="card-text">{oneMovie.overview.substring(0,100)}...</p> */}
                        //      <Link to={`/detalle?movieID=${oneMovie.id}`} className="btn btn-primary">View detail</Link>
                        //  </div>
                        //  </div>
                        // </div>
                        <div className="col-lg-2 " key={idx}>
                        <div className="card my-4" >
                             <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} height="400px" alt="Card image cap"/>

                             <div className="capa">
                                <p className="card-text py-4">{oneMovie.overview.substring(0,150)}...</p>
                                <h5 className="points pt-5">Puntuacion: {oneMovie.vote_average} ⭐</h5>
                                <Link to={`/detalle?movieID=${oneMovie.id}`} className="btn btn-primary" >Ver detalles
                             </Link>
                             </div>
                             
                         {/* <div className="card-body">
                             <h5 className="card-title">{oneMovie.title}</h5>
                             
                         </div> */}
                         </div>
                         
                        </div>
                    )
                })
            }
          
        </div>
      
      </>
    
  )
}
