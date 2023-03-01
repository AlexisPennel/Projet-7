import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from './Error.module.css';

function ErrorPage() {

  useEffect(() => {
    document.title = 'Kasa | Erreur 404';
  }, []);

  return (
    <>
      <Header />
      <div className={styles.error__box}>
        <h1>404</h1>
        <p>Oups ! La page que vous demandez n'existe pas.</p>
        <Link to={'/'}>Retourner sur la page d’accueil</Link >
      </div>
      <Footer />
    </>
  )
};

export default ErrorPage
