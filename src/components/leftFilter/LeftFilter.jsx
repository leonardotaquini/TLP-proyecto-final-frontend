import React from 'react';
import './leftFilter.css';

export const LeftFilter = () => {
  return (
    <>
        <div className='contenedor-left d-flex flex-column justify-content-center'>
            <div className='d-flex flex-column w-100 mx-5'>
            <h4 className='fw-bold  my-4'>Ordenar</h4>
                <p className='text-muted'>Mejores puntuados</p>
                <p className='text-muted'>Mas cercanos</p>
                <p className='text-muted'>Mayor cantidad de trabajos</p>
            </div>
            <div className='d-flex flex-column w-100 mx-5'>
            <h4 className='fw-bold my-4'>Filtros</h4>
                <p className='text-muted'>Plomería</p>
                <p className='text-muted'>Electricidad</p>
                <p className='text-muted'>Pintor</p>
                <p className='text-muted'>Albañilería</p>
                <p className='text-muted'>Gas</p>
                <p className='text-muted'>Carpintería</p>      
                <p className='text-muted'>Herrería</p>
                <p className='text-muted'>Fumigación</p>
                <p className='text-muted'>Reparación de PC</p>
                <p className='text-muted'>Reparación de Electrodomesticos</p>
                <p className='text-muted'>Reparación de Celulares</p>
                <p className='text-muted'>Cerrajería</p>
                <p className='text-muted'>Tapicería</p>
            </div>
        </div>
    </>
  )
}
