import React from 'react'
import swal from '@sweetalert/with-react';
import { useNavigate } from 'react-router-dom';
import {BsSearch} from 'react-icons/bs'

export default function Buscador() {

    const navigate = useNavigate();

    const submitHandler = e => {
        e.preventDefault();
        const keyword = e.currentTarget.keyword.value.trim();
        if(keyword.length === 0) {
            swal(<h5>Tienes que ingresar el nombre de la pelicula</h5>)
        } else if (keyword.length < 4){
            swal(<h5>Ingresa mas de 4 caracteres</h5>)
        } else {
            e.currentTarget.keyword.value = '';
            navigate(`/resultados?keyword=${keyword}`);
        }
    };


  return (
    <form className='d-flex align-items-center px-2' onSubmit={submitHandler}>
        <label className="form-label mb-0 mx-1">
            <input className="form-control p-1" type="text" name="keyword" placeholder='Buscar...'/>
        </label>

        <button type="submit" className="btn btn-primary p-1 "><BsSearch></BsSearch></button>
            
        </form>
  )
}
