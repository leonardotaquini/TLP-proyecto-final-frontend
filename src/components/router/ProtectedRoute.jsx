import { useNavigate, Outlet } from "react-router";
import { useContext, useEffect } from "react";
import { ProfesionalContext } from "../../context/profesional/ProfesionalContext";
import jwt from 'jwt-decode';

const ProtectedRoute = () => {
  const { inSession } = useContext(ProfesionalContext);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  let usuario = null;
  if(token){
    usuario = jwt(token);
  }

  useEffect(() => {
    if (!usuario) {
      navigate('/login');
      return;
    }
  }, [inSession, navigate]);


  return <Outlet />;
};

export default ProtectedRoute;
