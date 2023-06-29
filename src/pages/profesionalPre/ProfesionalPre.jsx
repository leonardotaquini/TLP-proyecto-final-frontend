import React from 'react'
import { Link } from 'react-router-dom'
import './profesionalPre.css';
import { Navbar } from '../../components/navbar/Navbar';
import { Fade } from "react-reveal";

export const ProfesionalPre = () => {
  return (
    <>
        <div className='vh-100 contenedor-pre d-flex flex-column'>
        <Navbar/>
        <div className='d-flex justify-content-center align-items-center flex-column m-auto'>
            <Fade left cascade>
                <h1 className='text-white fw-bold mb-5 titulo-pre text-center'>Impulsa tus ventas y atrae mas clientes!</h1>
            <div className='d-flex'>
                <Link to='/registro' className='btn btn-warning mx-3 fw-bold '>Registrarme</Link>
                <Link to='/login' className='btn btn-warning mx-3 fw-bold '>Inciar Sesion</Link>
            </div>
            </Fade>
        </div>
        </div>
    </>
  )
}
