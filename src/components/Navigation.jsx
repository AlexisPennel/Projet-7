import { Link, useLocation } from 'react-router-dom'
import styles from './Navigation.module.css'

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className={styles.nav}>
      <Link to={'/'} className={location.pathname === '/' ? styles.activeLink : ''}>Accueil</Link>
      <Link to={'/apropos'} className={location.pathname === '/apropos' ? styles.activeLink : ''}>A propos</Link>
    </nav>
  )
}

export default Navigation
