import React, { useEffect, useReducer, useState } from 'react'
import { ProfesionalContext } from './ProfesionalContext'
import { useNavigate } from 'react-router-dom'
import { profesionalReducer } from './ProfesionalReducer';
import { TYPES } from '../types';
import { profesionalAxios } from '../../helpers/profesionalAxios';
import jwt from 'jwt-decode';

export const ProfesionalState = ({ children }) => {

    const [profesionalesList, setProfesionalesList] = useState([]);

    const navigate = useNavigate();

    //Estado inicial: 
    const initialState = {
        profesionals: [],
        isLoading: true,
        inSession: false,
        user: null
    }

    //Defino el use reducer.

    const [state, dispatch] = useReducer( profesionalReducer, initialState );

    //Cuando cargue la pagina carga todos los profesionales

    useEffect(() => {
        getProfesionals();
    }, [profesionalesList]);

    //Obtengo el token y guardo en el estado los datos del usuario.
    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token){
            state.user = jwt(token);
            state.inSession = true;
        }
    }, [state.inSession]);
    

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

    const logout = () => {
        localStorage.removeItem('token');
        state.inSession = false;
        navigate('/login');
    }

    const setInSession = (valor) => {
        state.inSession = valor;
    }

  return (
    <ProfesionalContext.Provider value={{
        profesionals: state.profesionals,
        isLoading: state.isLoading,
        getProfesionals,
        addProfesional,
        inSession: state.inSession,
        user: state.user,
        logout,
        setInSession
    }}>
        {children}
    </ProfesionalContext.Provider>
  )
}
