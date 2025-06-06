import {NavLink} from 'react-router-dom'

/**
 * Renders the navigation bar for the application.
 * It includes links to Login, Home, About, and Products pages.
 */
const NavBar = () => {
  return (
    <nav style={{ backgroundColor: '#f0f0f0', padding: '10px' }}>
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex' }}>
        <li style={{ margin: '0 10px' }}><NavLink to= '/'>Login</NavLink></li>
        <li style={{ margin: '0 10px' }}><NavLink to= '/home'>Home</NavLink></li>
        <li style={{ margin: '0 10px' }}><NavLink to= '/about'>About</NavLink></li>
        <li style={{ margin: '0 10px' }}><NavLink to= '/products'>Products</NavLink></li>
      </ul>
    </nav>
  )
}

export default NavBar