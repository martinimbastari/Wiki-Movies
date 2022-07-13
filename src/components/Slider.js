import React from 'react'

import '../css/slider.css'

export default function Slider({selectedMovie}) {
  return (
    <div className='capaSlider'>
        <div className='hero' style={{backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${selectedMovie.backdrop_path})`}}>
        <div className='hero-content' >
            <h1 className='hero-title'>{selectedMovie.title}</h1>
            <p className='text-white'>{selectedMovie.overview ? selectedMovie.overview : null}</p>
            <button className='btn btn-danger my-2'>
              <a className='play' target='_blank' href={`${selectedMovie.homepage}`}>Ver Trailer</a>
              </button>
        </div>
        </div>
    </div>
  )
}
