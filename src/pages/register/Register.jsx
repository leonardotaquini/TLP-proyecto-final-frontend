import React from 'react';
import './register.css';
import { FormProfesional } from '../../components/formProfesional/FormProfesional';

export const Register = () => {
  return (
    <>
      <main className='d-flex flex-column flex-sm-row flex-lg-row vh-100'>
        <section className='col-6 bg-dark img-form d-flex justify-content-center align-items-center'>
          <h1 className='text-center m-4 fw-bold text-white fw-fold texto-register'>Registro del Profesional</h1>
        </section>
        <section className='shadows col-12 col-sm-6 col-lg-6 d-flex flex-column p-3'>
          <FormProfesional/>
        </section>
      </main>
    </>
  )
}
