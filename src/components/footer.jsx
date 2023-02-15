import logo from '../images/LOGO.png'
import '../styles/Footer.css'
import '../styles/index.css'

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
