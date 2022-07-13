import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineClose} from 'react-icons/ai'
import '../css/header.css';
import { useState } from 'react';
import { useAuth } from './context/authContext';


//components
import Buscador from './Buscador';

function Header () {  
    const navigate = useNavigate();
    const {user, logout, loading} = useAuth();
    const [toggleMenu, setToggleMenu] = useState(false);

    const handleLogout = async () => {
        await logout();
        navigate("/")
    };

    if(loading) return <h1>loading</h1>

    return (
        <>
        <nav className="navbar navbar-expand-lg bg-per fixed">
             <div className="container-fluid d-flex justify-content-center header gap-2">
                <ul className="d-flex text-center p-2">
                    <li className="nav-item   m-2">
                        <Link className=' nav-link text-white text-center ' to="/listado">Home</Link>
                    </li>
                </ul>
                <Buscador className='buscador'/>
                <div className='logout'>
                    <button type="submit" onClick={handleLogout} className="btn btn-outline-danger p-1">Cerrar Sesion</button>
                    </div>
                
                <GiHamburgerMenu className='hamburguerMenu ml-2' color='#fff' fontSize={27} onClick={() => setToggleMenu(true)}/>
                { toggleMenu && (
                    
                    <>
                    <div className='smallScreen'>
                    <div className='smallScreenOverlay'>
                     <AiOutlineClose color='#fff' className='closeIcon' fontSize={27} onClick={() => setToggleMenu(false)}/>
                     
                     <li className="nav-item small-nav-item m-2">
                        <Link className=' nav-link text-white' to="/listado">Home</Link>
                    </li>
                    <li className='nav-item small-nav-item  m-2'>
                    <button type="submit" onClick={handleLogout} className="btn btn-outline-danger p-1 logoutSmall">Cerrar Sesion</button>
                    </li>
                    </div>
                    </div>
                    </>
                    
                )
                    
                }
                
            </div>
        </nav>               
        </>
       
    )
}


export default Header;