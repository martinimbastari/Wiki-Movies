import React from "react";
//librerias
import {  Routes, Route} from 'react-router-dom';


//componentes
import Login from "./components/Login";
import Listado from './components/Listado';
import Detalle from './components/Detalle'
import Resultados from './components/Resultados';
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./components/context/authContext";
import Register from "./components/Register";

// styles
import './css/bootstrap.min.css';
import './css/app.css';


function App() {


  return (
    <>
    <AuthProvider>
      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route exact path='/registro' element={<Register/>}/>

        <Route path='/listado' element={<ProtectedRoute>
          <Listado />
        </ProtectedRoute>  } />
        <Route path='/detalle' element={
          <ProtectedRoute>
              <Detalle/>
          </ProtectedRoute>
        }/>
        <Route path='/resultados' element={<ProtectedRoute>
              <Resultados/>
          </ProtectedRoute>}/>
      </Routes>
    </AuthProvider>
    </>
    
  );
}

export default App;
