import React from 'react';
import './login.css';
import { Navbar } from '../../components/navbar/Navbar';
import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <>
      <main className='vh-100 d-flex flex-column contenedor-login'>
        <Navbar/>
          <section className='col-11 col-sm-5 col-lg-3 m-auto shadow p-5 formulario rounded'>
            <h1 className='text-center my-3'>Iniciar Sesion</h1>
            <hr />
            <form>
              <div className='mb-3'>
                <label className='form-label'>Correo</label>
                <input type='email' className='form-control border' />
              </div>
              <div className='mb-3'>
                <label className='form-label'>Contraseña</label>
                <input type='password' className='form-control' />
              </div>
              <p className='text-center'>¿Olvidaste tu contraseña? Reestablecela <Link to='/'>aqui</Link></p>
              <button type='submit' className='btn btn-primary w-100'>Ingresar</button>
            </form>
          </section>
      </main>
    </>
  )
}
