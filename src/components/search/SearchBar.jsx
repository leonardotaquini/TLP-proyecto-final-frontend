import React from 'react'
import './search.css'

export const SearchBar = () => {
  return (
    <>
        <form className='form container my-3 d-flex'>
            <input type="text" placeholder='Buscar' className='input-searchbar form-control'/>
            <button className='btn btn-searchbar'>
            <span className="material-symbols-outlined">person_search</span>
            </button>
        </form>
    </>
  )
}
