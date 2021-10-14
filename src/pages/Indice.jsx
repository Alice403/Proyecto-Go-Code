import React from 'react'
import Logo from 'images/logo_cuadernia.png';
import { useAuth0 } from "@auth0/auth0-react";


  
const Indice = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  return (
    <div>
        <button onClick= {() => loginWithRedirect()}>Log In</button>;
        <button onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
    </div>
    
  )
}

export default Indice
