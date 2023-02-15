import '../styles/Header.css'
import logo from '../images/LOGO_Red.png'
import Navigation from './Navigation'

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="" />
      <Navigation />
    </header>
  )
}

export default Header
