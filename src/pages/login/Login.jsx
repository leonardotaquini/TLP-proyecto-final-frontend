import React from 'react';
import './login.css';
import { Navbar } from '../../components/navbar/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { profesionalAxios } from '../../helpers/profesionalAxios';
import swal from 'sweetalert';

export const Login = () => {

  const mostrarError = (msg) => {
    swal({
      title: "Error",
      text: msg,
      icon: "error",
      buttons: true,
      timer: 3000
    });
  };

  const bienvenida = () => {
    swal({
      title: "Exito",
      text: 'Bienvenido a Arreglos Ya',
      icon: "success",
      buttons: true,
      timer: 3000
    });
  };

  const navigate = useNavigate();

  const { register, formState:{errors}, handleSubmit, reset } = useForm({defaultValues: {
    email: '',
    password: ''
  }});

  const onSubmit = async(user) => {
    try{
      const {token} = await profesionalAxios.login(user);
      window.localStorage.setItem('token', token);
      reset();
      bienvenida();
      navigate('/profesionales')
    }catch(err){
      const {message} = err.response.data;
      reset();
      mostrarError(message);      
    }
  }


  return (
    <>
      <main className='vh-100 d-flex flex-column contenedor-login'>
        <Navbar/>
          <section className='col-11 col-sm-5 col-lg-3 m-auto shadow p-5 formulario rounded'>
            <h1 className='text-center my-3'>Iniciar Sesion</h1>
            <hr />
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='mb-3'>
                <label className='form-label'>Correo</label>
                <input type='email' className='form-control border'{...register('email', { required: true })} />
                {errors.email && <span className='alert alert-danger text-center'>Email es requerido</span>}
              </div>
              <div className='mb-3'>
                <label className='form-label'>Contraseña</label>
                <input type='password' className='form-control' {...register('password', { required: true })} />
                {errors.password && <span className='alert alert-danger text-center'>Contraseña es requerida</span>}
              </div>
              <p className='text-center'>¿Olvidaste tu contraseña? Reestablecela <Link to='/'>aqui</Link></p>
              <button type='submit' className='btn btn-primary w-100'>Ingresar</button>
            </form>
          </section>
      </main>
    </>
  )
}
