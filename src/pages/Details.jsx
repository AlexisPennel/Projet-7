import Gallery from "../components/Gallery"
import { useLocation } from 'react-router-dom';
import AccommodationsInfo from "../components/AccommodationsInfo";
import styles from './Details.module.css'
import Collapse from '../components/Collapse'
import { useEffect } from "react";
import jsonData from '../data/logements.json'

const getAccommodationDataById = (id) => {
  const accommodationFind = jsonData.find(element => element.id === id);
  const accommodationIndex = jsonData.indexOf(accommodationFind);
  return jsonData[accommodationIndex];
};




function DetailsPage() {
  const location = useLocation();
  const { accommodationData } = location.state;

  useEffect(() => {
    document.title = `Kasa | ${accommodationData.title}`;
  }, [accommodationData.title]);

  return (
    <>
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
export { getAccommodationDataById };