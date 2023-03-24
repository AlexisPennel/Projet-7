import styles from './Home.module.css'
import Banner from '../components/Banner'
import bannerImage from '../images/Banner.jpg'
import CardsSection from '../components/CardsSection'
import jsonData from '../data/logements.json'
import { useLoaderData } from 'react-router-dom';


const getAccommodationsData = () => {
  return jsonData
};

function HomePage() {
  const accommodationsData = useLoaderData();

  document.title = 'Kasa | Accueil';

  return (
    <>
      <section className={styles.container}>
        <Banner image={bannerImage} title={'Chez vous, partout et ailleurs'} />
        <CardsSection accommodationsData={accommodationsData} />
      </section>
    </>
  )
}

export default HomePage
export { getAccommodationsData };