import React from 'react'
import './profesionalCard.css'
import plomero from '../../img/mario-plomero.jpg';

export const ProfesionalCard = ({profesional}) => {
  const {nombre, apellido, provincia, Oficios} = profesional;
  // const oficio = Oficios[0].nombre;
  return (
    <>
        <div className="card mb-3 mx-3 shadow">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={plomero} className="img-fluid rounded-start" alt="..."/>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title fw-bold text-center text-capitalize">{`${nombre} ${apellido}`}</h5>
                  <p className="card-text descripcion small">
                  Soy un plomero altamente capacitado y con amplia experiencia en el campo de la fontanería. Con un enfoque centrado en la excelencia y la satisfacción del cliente, me heganado una reputación sólida como el experto.
                  </p>
                  <div className='d-flex justify-content-between'>
                  <p className="card-text"><small className="text-body-secondary text-capitalize">Zona de trabajo: {provincia}</small></p>
                  <button className='btn btn-outline-primary btn-sm'>Contactar</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </>
  )
}
