import { Link } from 'react-router-dom'
import '../styles/home.css'
import logo from '../images/LOGO.png'

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="" />
      <nav>
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/àpropos'}>à propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
