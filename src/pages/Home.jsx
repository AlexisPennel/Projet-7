import styles from './Home.module.css'
import Banner from '../components/Banner'
import bannerImage from '../images/Banner.jpg'
import CardsSection from '../components/CardsSection'
import { Helmet } from 'react-helmet-async';
import jsonData from '../data/logements.json'

const getAccommodationsData = () => {
  return jsonData
};

function HomePage() {

  return (
    <>
      <Helmet>
        <title>Kasa | Accueil</title>
      </Helmet>
      <div className={styles.home}>
        <Banner image={bannerImage} title={'Chez vous, partout et ailleurs'} />
        <CardsSection />
      </div>
    </>
  )
}

export default HomePage
export { getAccommodationsData };