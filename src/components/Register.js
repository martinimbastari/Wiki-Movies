import React from 'react'
import { useState } from 'react'
import { useAuth } from './context/authContext'
import {useNavigate} from 'react-router-dom'
import swal from '@sweetalert/with-react';
import Footer from './Footer'

export default function Register() {
    const [user, setUser] = useState({
        email: '',
        password: '',
    })
    const navigate = useNavigate()

    const {signup} = useAuth();

    const handleChange = e => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
           await signup(user.email, user.password)
            swal(<h2>Te registraste correctamente</h2>)
            navigate('/listado');
        } catch (error) {
            console.log(error.code)
            if(error.code === "auth/invalid-email"){
                swal(<h5>Correo Invalido</h5>)
            } else if (error.code === "auth/weak-password"){
                swal(<h5>La contraseña debe tener al menos 6 caracteres</h5>)
            } else if (error.code === "auth/email-already-in-use"){
                swal(<h5>El correo ya esta registrado</h5>)
                     }
                }
            }
        
        


  return (
    <>

    
     <div className="container w-75 mt-5 text-white  rounded shadow">
            <div className="row align-items-lg-stretch">
                <div className="col bg rounded d-none d-lg-block col-md-5 col-lg-5 col-xl-6">
                </div>
        <div className="col back-gradient p-5 rounded-end">
            <h2 className="fw-bold  text-center mb-3">Registrate gratis!</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label for='email' className="form-label ">
                Correo electronico: </label>
                    <input onChange={handleChange} className="form-control " type="email" name="email" placeholder='ejemplo@gmail.com'/>
                </div>
            
                <div className="mb-4">
                    <label for='password' className="form-label "> Contraseña: </label>
                    <input onChange={handleChange} className="form-control" type="password" name="password" placeholder='******'/>
                </div>

                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">Registrarse</button>
                </div>
            </form>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
  }
