import React, { useContext } from 'react';
import './profesionalList.css';
import { Navbar } from '../../components/navbar/Navbar';
import { SearchBar } from '../../components/search/SearchBar';
import { ProfesionalCard } from '../../components/profesionalCard/ProfesionalCard';
import { LeftFilter } from '../../components/leftFilter/leftFilter';
import { RightFilter } from '../../components/rightFilter/RightFilter';
import { ProfesionalContext } from '../../context/profesional/ProfesionalContext';


export const ProfesionalList = () => {

    const { profesionals, isLoading } = useContext(ProfesionalContext);

  return (
    <>
        <main className='vh-100 contenedor-list'>
            <Navbar/>
            <section className='d-flex flex-column flex-sm-column flex-lg-row lista-profesionales bg-white'>
                <div className=' col-12 col-sm-3 col-lg-3'>
                    <LeftFilter/>
                </div>
                <div className='shadow col-12 col-sm-7 col-lg-6 card-container container'>
                    <SearchBar/>
                    <div className='w-100 cards d-flex flex-column'>
                        {
                            isLoading && 
                            <div className="spinner-border text-light" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        }
                        {
                            profesionals.length === 0 && <span className='alert alert-info alerta mx-3 text-center'>No hay profesionales</span>
                        }
                        {
                            profesionals.map( (profesional, i) => <ProfesionalCard key={i} profesional={profesional} /> )
                        }
                    </div>
                </div>
                <div className=' col-12 col-sm-3 col-lg-3'>
                    <h2 className='text-center my-3'>Destacados</h2>
                    <RightFilter/>
                    <RightFilter/>
                    <RightFilter/>
                    <RightFilter/>
                </div>
            </section>
        </main>
    </>
  )
}
