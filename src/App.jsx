import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home/Home'
import { NotFound } from './pages/notFound/NotFound'
import { ProfesionalList } from './pages/profesionalList/ProfesionalList'
import { ProfesionalPre } from './pages/profesionalPre/ProfesionalPre'
import { Register } from './pages/register/Register'
import { Login } from './pages/login/Login'
import { ProfesionalState } from './context/profesional/ProfesionalState'
import { Dashboard } from './pages/dashboardProfesional/Dashboard'


function App() {

  return (
    <>
      <BrowserRouter>
        <ProfesionalState>
            <Routes>
              <Route path='/' element={ <Home/> } />
              <Route path='/profesionales' element={ <ProfesionalList/> } />
              <Route path='/soyprofesional' element={ <ProfesionalPre/> } />
              <Route path='/registro' element={ <Register/> } />
              <Route path='/login' element={ <Login/> } />
              <Route path='/dashboard' element={ <Dashboard/> } />
              <Route path='*' element={ <NotFound/> } />
            </Routes>
        </ProfesionalState>
      </BrowserRouter>
    </>
  )
}

export default App
