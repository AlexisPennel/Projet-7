import { Link } from "react-router-dom";
import styles from './Error.module.css';
import { useEffect } from 'react';

function ErrorPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.error__box}>
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to={'/'}>Retourner sur la page d’accueil</Link >
    </div>
  )
};

export default ErrorPage
