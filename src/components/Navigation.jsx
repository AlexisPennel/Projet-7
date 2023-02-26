import { NavLink } from 'react-router-dom'
import styles from './Navigation.module.css'

const Navigation = () => {
  let activeStyle = {
    textDecoration: "underline",
  };

  return (
    <nav className={styles.nav}>
      <NavLink to={'/'} style={({ isActive }) =>
        isActive ? activeStyle : undefined
      }>Accueil</NavLink>
      <NavLink to={'/apropos'} style={({ isActive }) =>
        isActive ? activeStyle : undefined
      }>A propos</NavLink>
    </nav>
  )
}

export default Navigation
