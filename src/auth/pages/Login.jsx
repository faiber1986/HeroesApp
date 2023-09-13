import { Outlet, useNavigate } from "react-router-dom";
import { Footer, Navbar } from "../../ui/components"
import { useContext } from "react";
import { AuthContext } from "../context";

export const Login = () => {

  const { login } = useContext( AuthContext );
  const navigate = useNavigate();
  
  const onLogin = () => {

    login( 'Andres Gomez' );

    navigate('/', {
        replace: true
    })

  }

  return (
    <>
      <Navbar />
      <div className="container mt-5 mb-5">
        <h1>Login</h1>
        <hr />
        <button 
          className="btn btn-primary"
          onClick={ onLogin }
        >
          Login
        </button>

      </div>
      <Footer />
      <Outlet />
    </>
  )
}
