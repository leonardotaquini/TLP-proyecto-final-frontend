import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
        <nav className='navbar nav shadow  navbar-expand-lg d-flex'>
            <Link to='/' className='text-decoration-none text-light h4 fw-bold mx-2'>Arreglos Ya</Link>

            <button className="navbar-toggler btn-hamburguesa" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="material-symbols-outlined icono-hmbr">menu</span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link to='/' className="nav-link text-white text-center" aria-current="page">Inicio</Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/profesionales' className="nav-link text-white text-center">Explorar</Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/soyprofesional' className="nav-link  text-white text-center">Soy profesional</Link>
                  </li>
                </ul>
            </div>
        </nav>
                
    </>
  )
}
