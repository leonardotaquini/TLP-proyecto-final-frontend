import React, { useContext, useEffect, useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import jwt from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
import { ProfesionalContext } from '../../context/profesional/ProfesionalContext'

export const Navbar = () => {

  const {user, inSession, logout} = useContext(ProfesionalContext)

  const navigate = useNavigate();
  const [userInSession, setUserInSession] = useState(null);

  useEffect(() => { 
    const token = localStorage.getItem('token');
    if(token){
      const usuario = jwt(token);
      setUserInSession(usuario);
    }
  }, [inSession]);
  
  return (
    <>
        <nav className='navbar nav shadow  navbar-expand-lg d-flex sticky-top'>
            <Link to='/' className='text-decoration-none text-light h4 fw-bold mx-2'>Arreglos Ya</Link>

            <button className="navbar-toggler btn-hamburguesa" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="material-symbols-outlined icono-hmbr">menu</span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <div className='d-flex  ms-auto justify-content-center'>
                <ul className="navbar-nav">

                {
                    userInSession !== null &&

                    <li className="nav-item">
                      <div className="dropdown">
                        <button className="dropdown-toggle text-white btn text-capitalize" data-bs-toggle="dropdown" aria-expanded="false">
                          {userInSession.nombre}
                        </button>
                        <ul className="dropdown-menu dropdown-menu-lg-start">
                          <li><Link className="dropdown-item" to='/perfil'>Perfil</Link></li>
                          <li><Link className="dropdown-item" to='/dashboard'>Configuracion</Link></li>
                          <li><button className="dropdown-item" onClick={ logout }>Cerrar Sesion</button></li>
                        </ul>
                      </div>
                    </li>        
                   }

                  <li className="nav-item">
                    <Link to='/' className="nav-link text-white text-center" aria-current="page">Inicio</Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/profesionales' className="nav-link text-white text-center">Explorar</Link>
                  </li>
                   
                   
                   {
                    userInSession === null &&
                    <li className="nav-item">
                      <Link to='/soyprofesional' className="nav-link  text-white text-center">Soy profesional</Link>
                    </li>    
                   }     
                      
                    
                </ul>
              </div>
            </div>
        </nav>
                
    </>
  )
}
