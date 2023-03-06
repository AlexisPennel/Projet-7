import styles from './Header.module.css'
import logo from '../images/LOGO_Red.png'
import Navigation from './Navigation'

const Header = () => {
  return (
    <header className={styles.container}>
      <img src={logo} alt="" />
      <Navigation />
    </header>
  )
}

export default Header
