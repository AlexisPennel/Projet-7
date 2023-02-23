import Gallery from "../components/Gallery"
import { useLocation } from 'react-router-dom';
import AccommodationsInfo from "../components/AccommodationsInfo";
import styles from './Details.module.css'
import Collapse from '../components/Collapse'
import { useEffect } from "react";

function DetailsPage() {
  const location = useLocation();
  const { productData } = location.state;


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <>
      <Gallery pictures={productData.pictures} />
      <section className={styles.accommodationsInfo__box}>
        <AccommodationsInfo data={productData} />
      </section>
      <section className={styles.accommodationCollapse__section}>
        <div>
          <Collapse
            size={'small'}
            title={'Description'}
            content={productData.description} />
        </div>
        <div>
          <Collapse
            size={'small'}
            title={'Équipements'}
            array={productData.equipments} />
        </div>
      </section>
    </>
  )
}

export default DetailsPage
