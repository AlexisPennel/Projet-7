import styles from './Home.module.css'
import Banner from '../components/Banner'
import bannerImage from '../images/Banner.jpg'
import CardsSection from '../components/CardsSection'
import jsonData from '../data/logements.json'
import { useLoaderData } from 'react-router-dom';
import { useEffect } from 'react'


const getAccommodationsData = () => {
  return jsonData
};

function HomePage() {
  const accommodationsData = useLoaderData();

  useEffect(() => {
    document.title = 'Kasa | Accueil';
  }, []);

  return (
    <>
      <div className={styles.home}>
        <Banner image={bannerImage} title={'Chez vous, partout et ailleurs'} />
        <CardsSection accommodationsData={accommodationsData} />
      </div>
    </>
  )
}

export default HomePage
export { getAccommodationsData };