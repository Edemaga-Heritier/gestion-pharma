import { Link } from 'react-router-dom';
import Button from "../component/button";

/**
 * Renders the login page.
 * It displays a login header and a button that links to the home page.
 */
const Login = () => {
  return (
    <>
    <h1>Login</h1>

      <Link to="/home">
        <Button label="Connexion" />
      </Link>
    
    </>
  )
}

export default Login;