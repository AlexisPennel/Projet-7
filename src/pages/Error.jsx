import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from './Error.module.css';

function ErrorPage() {

  document.title = 'Kasa | Erreur 404';


  return (
    <>
      <Header />
      <section className={styles.section__box}>
        <h1>404</h1>
        <p>Oups ! La page que vous demandez n'existe pas.</p>
        <Link to={'/'}>Retourner sur la page d’accueil</Link >
      </section>
      <Footer />
    </>
  )
};

export default ErrorPage
