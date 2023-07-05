import React, { useEffect, useReducer, useState } from 'react'
import { ProfesionalContext } from './ProfesionalContext'
import { useNavigate } from 'react-router-dom'
import { profesionalReducer } from './ProfesionalReducer';
import { TYPES } from '../types';
import { profesionalAxios } from '../../helpers/profesionalAxios';

export const ProfesionalState = ({ children }) => {

    const [profesionalesList, setProfesionalesList] = useState([]);

    const navigate = useNavigate();

    //Estado inicial: 
    const initialState = {
        profesionals: [],
        isLoading: true,
    }

    //Defino el use reducer.

    const [state, dispatch] = useReducer( profesionalReducer, initialState );

    //Cuando cargue la pagina carga todos los profesionales

    useEffect(() => {
        getProfesionals();
    }, [profesionalesList])
    

    //Funciones:

    const getProfesionals = async () => {
        const profesionals =  await profesionalAxios.getAll();
        dispatch({
            type: TYPES.GET_PROFESIONALES,
            payload: profesionals
        });
    }

    const addProfesional = async (profesional) => {      
        const res = await profesionalAxios.save(profesional);
        setProfesionalesList([...state.profesionals, res])
        dispatch({
            type: TYPES.ADD_PROFESIONAL,
            payload: res
        });
        navigate('/login');
    }

  return (
    <ProfesionalContext.Provider value={{
        profesionals: state.profesionals,
        isLoading: state.isLoading,
        getProfesionals,
        addProfesional
    }}>
        {children}
    </ProfesionalContext.Provider>
  )
}
