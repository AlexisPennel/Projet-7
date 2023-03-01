import Gallery from "../components/Gallery"
import { useLocation } from 'react-router-dom';
import AccommodationsInfo from "../components/AccommodationsInfo";
import styles from './Details.module.css'
import Collapse from '../components/Collapse'
import { Helmet } from "react-helmet-async";

function DetailsPage() {
  const location = useLocation();
  const { accommodationData } = location.state;

  return (
    <>
      <Helmet>
        <title>Kasa | {accommodationData.title}</title>
      </Helmet>
      <Gallery pictures={accommodationData.pictures} />
      <section className={styles.accommodationsInfo__box}>
        <AccommodationsInfo accommodationData={accommodationData} />
      </section>
      <section className={styles.accommodationCollapse__section}>
        <div className={styles.collapse__box}>
          <Collapse title={'Description'} content={accommodationData.description} />
        </div>
        <div className={styles.collapse__box}>
          <Collapse title={'Équipements'} content={accommodationData.equipments} />
        </div>
      </section>
    </>
  )
}

export default DetailsPage
