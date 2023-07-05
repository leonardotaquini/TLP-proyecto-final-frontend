import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { oficioAxios } from '../../helpers/oficioAxios';
import { ProfesionalContext } from '../../context/profesional/ProfesionalContext';

export const FormProfesional = () => {

  const { addProfesional } = useContext(ProfesionalContext);

  const [oficios, setOficios] = useState([]);
  const [ isDisabled, setIsDisabled ] = useState(true);

  //Funciones

  const getOfices = async() => {
   const res = await oficioAxios.getAll();
   setOficios(res);
  }

  const onSubmit = (data) => {
    addProfesional(data);
    reset();
  }

  const validarPassword = (e) => {
    let pass2 = e.target.value;
    if( getValues('password') !== '' && getValues('password') === pass2){
      setIsDisabled(false);
    }else{
      setIsDisabled(true);
    }
  }


  useEffect(() => { 
    getOfices();
  }, []);
  

  const { register, formState:{errors}, reset, handleSubmit, getValues, setFocus } = useForm({defaultValues:{
    nombre:'',
    apellido:'',
    email:'',
    password:'',
    fecha_nacimiento:'',
    telefono:'',
    direccion:'',
    provincia:'',
    oficioId: null,
    imagen: 'img.jpg',
  }});

  return (
    <>
         <form className='container d-flex flex-wrap justify-content-around m-auto' onSubmit={handleSubmit(onSubmit)}>
            <div className='col-12 col-lg-5 col-sm-5'>
              <label  className='form-label'>Nombre</label>
              <input type='text' className='form-control'  {...register('nombre', {required: true})} />
              {errors.nombre?.type === 'required' && <p className='alert alert-danger'>El campo nombre es requerido</p> }
            </div>

            <div className='col-12 col-lg-5 col-sm-5'>
              <label className='form-label'>Apellido</label>
              <input type='text' className='form-control'  {...register('apellido', {required: true})} />
              {errors.apellido?.type === 'required' && <p className='alert alert-danger'>El campo apellido es requerido</p> }
            </div>

            <div className='col-12 col-lg-5 col-sm-5'>
              <label className='form-label'>Correo</label>
              <input type='email' className='form-control'  {...register('email', {required: true})} />
              {errors.email?.type === 'required' && <p className='alert alert-danger'>El campo correo es requerido</p> }
            </div>

            <div className='col-12 col-lg-5 col-sm-5'>
              <label className='form-label'>Contraseña</label>
              <input type='password' className='form-control'  {...register('password', {required: true})}/>
              {errors.password?.type === 'required' && <p className='alert alert-danger'>El campo contraseña es requerido</p> }
            </div>

            <div className='col-12 col-lg-5 col-sm-5'>
              <label className='form-label'>Repetir Contraseña</label>
              <input type='password' className='form-control' onChange={(e)=> validarPassword(e)} />
            </div>

            <div className='col-12 col-lg-5 col-sm-5'>
              <label className='form-label'>Fecha de nacimiento</label>
              <input type='date' className='form-control'  {...register('fecha_nacimiento', {required: true})}/>
              {errors.fecha_nacimiento?.type === 'required' && <p className='alert alert-danger'>El campo fecha de nacimiento es requerido</p> }
            </div>

            <div className='col-12 col-lg-5 col-sm-5'>
              <label className='form-label'>Telefono</label>
              <input type='number' className='form-control'  {...register('telefono', {required: true})}/>
              {errors.telefono?.type === 'required' && <p className='alert alert-danger'>El campo telefono es requerido</p> }
            </div>

            <div className='col-12 col-lg-5 col-sm-5'>
              <label className='form-label'>Direccion</label>
              <input type='text' className='form-control' {...register('direccion', {required: true})}/>
              {errors.direccion?.type === 'required' && <p className='alert alert-danger'>El campo direccion es requerido</p> }
            </div>

            <div className='col-12 col-lg-5 col-sm-5'>
              <label className='form-label'>Provincia</label>
              <select className='form-select'  {...register('provincia', {required: true})}>
                
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
              {errors.provincia?.type === 'required' && <p className='alert alert-danger'>El campo provincia es requerido</p> }
            </div>

            <div className='col-12 col-lg-5 col-sm-5'>
              <label className='form-label'>Oficio</label>
              <select className='form-select'  {...register('oficioId', {required: true, valueAsNumber: true})}>
                {
                  oficios.map(({nombre, id}, i) => (
                    <option key={i} value={id}>{ nombre }</option>
                    ))
                }
              </select>
              {errors.oficioId?.type === 'required' && <p className='alert alert-danger'>El campo oficio es requerido</p> }
            </div>
            <button className='btn btn-success col-11 col-sm-4 col-lg-4  my-2' disabled={isDisabled}>Guardar</button>
            <Link to='/' className='btn btn-outline-primary col-11 col-sm-4 col-lg-4  my-2'>Volver</Link>
          </form>
          <p className='text-center'>Tambien podes registrarte con: </p>

          <div className='d-flex flex-column'>
          <button className="google-button my-2 col-11 m-auto col-sm-11 col-lg-6">
            <span className="google-icon"></span>
            <span className="google-text">Registrarse con Google</span>
          </button>

          <button className="facebook-button my-2 col-11 col-sm-11 col-lg-6 m-auto">
            <span className="facebook-icon"></span>
            <span className="facebook-text">Registrarse con Facebook</span>
          </button>
          </div>
    </>
  )
}
