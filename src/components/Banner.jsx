import { useLocation } from 'react-router-dom';
import styles from './Banner.module.css'


const Banner = ({ title, image }) => {
  const page = useLocation();

  return (
    <div className={page.pathname === '/apropos' ? `${styles.banner__box} ${styles.banner__box__about}` : styles.banner__box}>
      {title && <h1>{title}</h1>}
      <img src={image} alt="" />
      <div className={styles.banner__filter}></div>
    </div>
  )
};

export default Banner;
