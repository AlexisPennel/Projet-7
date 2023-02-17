import { Link } from 'react-router-dom'
import styles from './Navigation.module.css'

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <Link to={'/'}>Accueil</Link>
      <Link to={'/apropos'}>A propos</Link>
    </nav>
  )
}

export default Navigation
