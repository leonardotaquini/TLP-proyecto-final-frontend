import React from 'react'
import { Link } from 'react-router-dom';

export const FormProfesional = () => {
  return (
    <>
         <form className='container d-flex flex-wrap justify-content-around m-auto'>
            <div className='col-12 col-lg-5 col-sm-5'>
              <label  className='form-label'>Nombre</label>
              <input type='text' className='form-control' />
            </div>

            <div className='col-12 col-lg-5 col-sm-5'>
              <label className='form-label'>Apellido</label>
              <input type='text' className='form-control' />
            </div>

            <div className='col-12 col-lg-5 col-sm-5'>
              <label className='form-label'>Correo</label>
              <input type='email' className='form-control' />
            </div>

            <div className='col-12 col-lg-5 col-sm-5'>
              <label className='form-label'>Contraseña</label>
              <input type='password' className='form-control' />
            </div>

            <div className='col-12 col-lg-5 col-sm-5'>
              <label className='form-label'>Repetir Contraseña</label>
              <input type='password' className='form-control' />
            </div>

            <div className='col-12 col-lg-5 col-sm-5'>
              <label className='form-label'>Fecha de nacimiento</label>
              <input type='date' className='form-control' />
            </div>

            <div className='col-12 col-lg-5 col-sm-5'>
              <label className='form-label'>Telefono</label>
              <input type='number' className='form-control' />
            </div>

            <div className='col-12 col-lg-5 col-sm-5'>
              <label className='form-label'>Direccion</label>
              <input type='text' className='form-control' />
            </div>

            <div className='col-12 col-lg-5 col-sm-5'>
              <label className='form-label'>Provincia</label>
              <select className='form-select'>
                //Todas las provincias argentinas
                <option value="Buenos Aires">Buenos Aires</option>
                <option value="Catamarca">Catamarca</option>
                <option value="Chaco">Chaco</option>
                <option value="Chubut">Chubut</option>
                <option value="Córdoba">Córdoba</option>
                <option value="Corrientes">Corrientes</option>
                <option value="Entre Ríos">Entre Ríos</option>
                <option value="Formosa">Formosa</option>
                <option value="Jujuy">Jujuy</option>
                <option value="La Pampa">La Pampa</option>
                <option value="La Rioja">La Rioja</option>
                <option value="Mendoza">Mendoza</option>
                <option value="Misiones">Misiones</option>
                <option value="Neuquén">Neuquén</option>
                <option value="Río Negro">Río Negro</option>
                <option value="Salta">Salta</option>
                <option value="San Juan">San Juan</option>
                <option value="San Luis">San Luis</option>
                <option value="Santa Cruz">Santa Cruz</option>
                <option value="Santa Fe">Santa Fe</option>
                <option value="Santiago del Estero">Santiago del Estero</option>
                <option value="Tierra del Fuego">Tierra del Fuego</option>
                <option value="Tucumán">Tucumán</option>
              </select>
            </div>

            <div className='col-12 col-lg-5 col-sm-5'>
              <label className='form-label'>Oficio</label>
              <select className='form-select'>
                <option value="1">Electricidad</option>
                <option value="2">Gas</option>
                <option value="3">Plomeria</option>
                <option value="4">Albañileria</option>
                <option value="5">Pintor</option>
                <option value="6">Herreria</option>
                <option value="7">Cerrajeria</option>
              </select>
            </div>
            <button className='btn btn-outline-primary col-11 col-sm-4 col-lg-4  my-2'>Guardar</button>
            <Link to='/' className='btn btn-outline-success col-11 col-sm-4 col-lg-4  my-2'>Volver</Link>
          </form>
          <p className='text-center'>Tambien podes registrarte con: </p>

          <div className='d-flex flex-column'>
          <button class="google-button my-2 col-11 m-auto col-sm-11 col-lg-6">
            <span class="google-icon"></span>
            <span class="google-text">Registrarse con Google</span>
          </button>

          <button class="facebook-button my-2 col-11 col-sm-11 col-lg-6 m-auto">
            <span class="facebook-icon"></span>
            <span class="facebook-text">Registrarse con Facebook</span>
          </button>
          </div>
    </>
  )
}
