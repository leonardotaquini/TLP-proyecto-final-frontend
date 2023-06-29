import React from 'react';
import './profesionalList.css';
import { Navbar } from '../../components/navbar/Navbar';
import { SearchBar } from '../../components/search/SearchBar';
import { ProfesionalCard } from '../../components/profesionalCard/ProfesionalCard';
import { LeftFilter } from '../../components/leftFilter/leftFilter';
import { RightFilter } from '../../components/rightFilter/RightFilter';

export const ProfesionalList = () => {
  return (
    <>
        <main className='vh-100 contenedor-list'>
            <Navbar/>
            <section className='d-flex flex-column flex-sm-row flex-lg-row lista-profesionales bg-white'>
                <div className=' col-12 col-sm-3 col-lg-3'>
                    <LeftFilter/>
                </div>
                <div className='shadow col-12 col-sm-7 col-lg-6'>
                    <SearchBar/>
                    <div>
                        <ProfesionalCard/>
                        <ProfesionalCard/>
                        <ProfesionalCard/>
                        <ProfesionalCard/>
                        <ProfesionalCard/>
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
