import { NavLink } from 'react-router-dom'
import styles from './Navigation.module.css'

const Navigation = () => {


  return (
    <nav className={styles.nav}>
      <NavLink to={'/'} className={({ isActive }) =>
        isActive ? styles.activeStyle : undefined
      }>Accueil</NavLink>
      <NavLink to={'/apropos'} className={({ isActive }) =>
        isActive ? styles.activeStyle : undefined
      }>A propos</NavLink>
    </nav>
  )
}

export default Navigation
