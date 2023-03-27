import logo from '../images/LOGO.png'
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.container}>
            <img src={logo} alt="Logo Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer
