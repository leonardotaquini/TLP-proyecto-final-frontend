import React from 'react'
import { Navbar } from '../../components/navbar/Navbar';
import './dashboard.css';
import { Link } from 'react-router-dom';

export const Dashboard = () => {
  return (
    <>
        <main className='vh-100'>
            <Navbar/>
            <div className='section-container d-flex'>
                <section className='opciones col-12 col-sm-4 col-lg-3 d-flex flex-column shadow'>
                    <Link to='/' className='text-center m-3 fw-bold h2 text-decoration-none'>Arreglos Ya</Link>
                <div className='d-flex m-auto w-100 justify-content-center '>
                    <ul className="list-group  w-75 ">
                      <li className="list-group-item"><Link className='text-decoration-none text-dark small'>Datos de Perfil</Link></li>
                      <li className="list-group-item"><Link className='text-decoration-none text-dark small'>Agregar Profesiones</Link></li>
                      <li className="list-group-item"><Link className='text-decoration-none text-dark small'>Mensajes</Link></li>
                      <li className="list-group-item"><Link className='text-decoration-none text-dark small'>Privacidad</Link></li>
                      <li className="list-group-item"><Link className='text-decoration-none text-dark small'>Ayuda</Link></li>
                      <li className="list-group-item"><Link className='text-decoration-none text-dark small'>Borrar cuenta</Link></li>
                    </ul>
                </div>
                <footer className='text-muted text-center'>
                   <small>@Arreglos ya 2023</small>
                </footer>
                </section>

                <section className='config-container col-9'></section>
            </div>
        </main>
    </>
  )
}
