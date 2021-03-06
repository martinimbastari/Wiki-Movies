import React from "react";
import { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import "../css/listado.css"
import Pagination from "./Pagination";
import Slider from "./Slider";


import Header from "./Header";


function Listado () {
    let [pageNumber, setPageNumber] = useState(1);
    let [info, setInfo] = useState()
    const [moviesList, setMoviesList] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState({})


   

    let api = `https://api.themoviedb.org/3/discover/movie?api_key=05b7bce64d5b68a034314fc39fdefe74&language=es-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&with_watch_monetization_types=flatrate`;

    useEffect(() => {
        (async function () {
            let data = await fetch(api).then((res) => res.json());
            setInfo(data.total_pages)
            setMoviesList(data.results)
            setSelectedMovie(data.results[0])
            
        })();
    }, [api]);

    
    
    return (
        <>
        <div>
        <Header/>
        <Slider selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie}/>
        <div className="row px-5 contenedor-listado">
        
            {
                moviesList.map((oneMovie, idx) =>{
                    return(
                        <div className="col-lg-2 col-sm-4" key={idx}>
                        <div className="card my-4" >
                             <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} height="400px" width="100%" alt="Card image cap"/>
                             <div className="capa">
                                <p className="card-text py-4">{oneMovie.overview.substring(0,150)}...</p>
                                <h5 className="points pt-5">⭐{oneMovie.vote_average}/10 </h5>
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
            <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber}></Pagination>
          
        </div>

        </div>
        
        </>
    )
}

export default Listado;