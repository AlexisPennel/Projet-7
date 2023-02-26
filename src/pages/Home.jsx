import styles from './Home.module.css'
import Banner from '../components/Banner'
import bannerImage from '../images/Banner.jpg'
import AccommodationsCards from '../components/AccommodationsCards'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async';
import jsonData from '../data/logements.json'

const getAccommodationsData = () => {
  return jsonData
};

function HomePage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Kasa | Accueil</title>
      </Helmet>
      <div className={styles.home}>
        <Banner image={bannerImage} title={'Chez vous, partout et ailleurs'} />
        <AccommodationsCards />
      </div>
    </>
  )
}

export default HomePage
export { getAccommodationsData };