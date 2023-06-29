import React from 'react';
import './login.css';
import { Navbar } from '../../components/navbar/Navbar';

export const Login = () => {
  return (
    <>
      <main className='vh-100 d-flex flex-column contenedor-login'>
        <Navbar/>
          <section className='col-12 col-sm-5 col-lg-4 m-auto shadow p-5 formulario'>
            <h1 className='text-center my-5'>Iniciar Sesion</h1>
            <form>
              <div className='mb-3'>
                <label className='form-label'>Correo</label>
                <input type='email' className='form-control border' />
              </div>
              <div className='mb-3'>
                <label className='form-label'>Contraseña</label>
                <input type='password' className='form-control' />
              </div>
              <button type='submit' className='btn btn-primary'>Ingresar</button>
            </form>
          </section>
      </main>
    </>
  )
}
