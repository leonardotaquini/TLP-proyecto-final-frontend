import React from "react";
import './home.css'
import { Navbar } from "../../components/navbar/Navbar";
import { Fade } from "react-reveal";
import { Typewriter } from 'react-simple-typewriter';
import { Link } from "react-router-dom";


export const Home = () => {
    const oficios = ['Electricistas', 'Plomeros', 'Gasistas', 'Mecánicos', 'Albañiles']
  return (
    <>
      <main className="contenedor-main vh-100">
        <Navbar/>
            <section className="texto-container">
                <Fade cascade left duration={2200}>
                    <h2 className="text-white text-center fw-bold texto">
                    Encuentra a expertos en el área
                    </h2>
                
                <span className='text-white oficios fw-bold text-center'>{' '}
                    <Typewriter
                        loop
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        delaySpeed={2000}
                        deleteSpeed={50}
                        words={oficios}/>
                </span>
                <Link to='/profesionales' className="text-decoration none btn btn-warning  fw-bold">Explorar</Link>
                </Fade>
            </section>

      </main>
    </>
  );
};
