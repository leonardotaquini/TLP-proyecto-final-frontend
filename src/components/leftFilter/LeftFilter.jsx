import React from 'react';
import './leftFilter.css';
import { Link } from 'react-router-dom';

export const LeftFilter = () => {
  return (
    <>
        <div className='contenedor-left d-flex flex-column justify-content-center'>
            <div className='d-flex flex-column w-100 mx-5'>
            <h4 className='fw-bold  my-4'>Ordenar</h4>
                <Link  className='text-muted small text-decoration-none my-2'>Mejores puntuados</Link>
                <Link className='text-muted small text-decoration-none my-2'>Mas cercanos</Link>
                <Link className='text-muted small text-decoration-none my-2'>Mayor cantidad de trabajos</Link>
            </div>
            <div className='d-flex flex-column w-100 mx-5'>
            <h4 className='fw-bold my-4'>Filtros</h4>
                <Link className='text-muted small text-decoration-none my-2'>Plomería</Link>
                <Link className='text-muted small text-decoration-none my-2'>Electricidad</Link>
                <Link className='text-muted small text-decoration-none my-2'>Pintor</Link>
                <Link className='text-muted small text-decoration-none my-2'>Albañilería</Link>
                <Link className='text-muted small text-decoration-none my-2'>Gas</Link>
                <Link className='text-muted small text-decoration-none my-2'>Carpintería</Link>      
                <Link className='text-muted small text-decoration-none my-2'>Herrería</Link>
                <Link className='text-muted small text-decoration-none my-2'>Fumigación</Link>
                <Link className='text-muted small text-decoration-none my-2'>Reparación de PC</Link>
                <Link className='text-muted small text-decoration-none my-2'>Reparación de Electrodomesticos</Link>
                <Link className='text-muted small text-decoration-none my-2'>Reparación de Celulares</Link>
                <Link className='text-muted small text-decoration-none my-2'>Cerrajería</Link>
                <Link className='text-muted small text-decoration-none my-2'>Tapicería</Link>
            </div>
        </div>
    </>
  )
}
