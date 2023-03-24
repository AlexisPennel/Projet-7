import { useLocation } from 'react-router-dom';
import styles from './Banner.module.css'


const Banner = ({ title, image }) => {
  const page = useLocation();

  return (
    <section className={page.pathname === '/apropos' ? `${styles.container} ${styles.container__about}` : styles.container}>
      {title && <h1>{title}</h1>}
      <img src={image} alt="banner Kasa" />
      <div className={styles.filter}></div>
    </section>
  )
};

export default Banner;
