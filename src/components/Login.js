import React from 'react'
import { useState } from 'react'
import { useAuth } from './context/authContext'
import {useNavigate, Navigate, Link} from 'react-router-dom'
import swal from '@sweetalert/with-react';
import Footer from './Footer'

//styles
import '../css/login.css'

export default function Login() {
    const [user, setUser] = useState({
        email: '',
        password: '',
    })
    const navigate = useNavigate()
    const [error, setError] = useState('');

    const {login} = useAuth();

    const handleChange = e => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('');
        try {
           await login(user.email, user.password)
            swal(<h2>Inicio sesion correctamente</h2>)
            navigate('/listado');
        } catch (error) {
            console.log(error.code)
            if(error.code === "auth/user-not-found"){
                swal(<h5>El usuario no esta registrado</h5>)
            } else if (error.code === "auth/wrong-password"){
                swal(<h5>La contraseña es incorrecta</h5>)
            }
        }
        
    }


  return (
    <>
    <div  className='contenedor-login'>
    <div className="container mt-5 rounded text-dark contenedor-principal">
            <div className="row align-items-lg-stretch">
                <div className="col bgLogin  d-none d-lg-block col-md-5 col-lg-5 col-xl-6">
                </div>
        <div className="col contenedor-login_info p-5 rounded-end">
            <h2 className="fw-bold text-center mb-3 ">¡Bienvenido, inicia sesion!</h2>
            <form onSubmit={handleSubmit} className='text-dark'>
                <div className="mb-4">
                    <label for='email'  className="form-label">
                Correo electronico: </label>
                    <input onChange={handleChange} className="form-control shadow " type="email" name="email" placeholder='ejemplo@gmail.com'/>
                </div>
            
                <div className='mb-4'>
                    <label for='password' className="form-label"> Contraseña: </label>
                    <input onChange={handleChange} className="form-control shadow" type="password" name="password" placeholder='******'/>
                </div>

                <div className="d-grid">
                    <button type="submit" className="boton shadow">Inicia Sesion</button>
                </div>
                <div className="col-auto mt-2">
                    <span id="passwordHelpInline" className="form-text text-secondary">
                         ¿No tienes una cuenta?  <Link to='/registro'>Registrate aca.</Link> 
                    </span>
                </div>
            </form>
                </div>
            </div>
        </div>
    </div>
    
        <Footer/>
    </>
  )
}