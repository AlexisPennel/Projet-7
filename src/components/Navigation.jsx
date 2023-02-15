import { Link } from 'react-router-dom'
import '../styles/Navigation.css'
const Navigation = () => {
  return (
    <nav className="nav">
      <Link to={'/'}>Home</Link>
      <Link to={'/apropos'}>A propos</Link>
    </nav>
  )
}

export default Navigation
