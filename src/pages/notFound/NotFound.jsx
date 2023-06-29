import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <div className=''>
        <span className='d-flex justify-content-between align-items-center alert alert-danger '>
        <h5 className='text-center m-auto'>Pagina no encontrada</h5>
        <Link to='/' className='text-decoration-none btn btn-outline-primary'>Volver</Link>
        </span>
    </div>
  )
}
