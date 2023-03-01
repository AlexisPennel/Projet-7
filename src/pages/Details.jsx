import Gallery from "../components/Gallery"
import { useLocation } from 'react-router-dom';
import AccommodationsInfo from "../components/AccommodationsInfo";
import styles from './Details.module.css'
import Collapse from '../components/Collapse'
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

function DetailsPage() {
  const location = useLocation();
  const { detailsData } = location.state;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <>
      <Helmet>
        <title>Kasa | {detailsData.title}</title>
      </Helmet>
      <Gallery pictures={detailsData.pictures} />
      <section className={styles.accommodationsInfo__box}>
        <AccommodationsInfo infoData={detailsData} />
      </section>
      <section className={styles.accommodationCollapse__section}>
        <div className={styles.collapse__box}>
          <Collapse title={'Description'} content={detailsData.description} />
        </div>
        <div className={styles.collapse__box}>
          <Collapse title={'Équipements'} content={detailsData.equipments} />
        </div>
      </section>
    </>
  )
}

export default DetailsPage
