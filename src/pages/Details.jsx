import { useLoaderData } from 'react-router-dom';
import AccommodationsInfo from "../components/AccommodationsInfo";
import styles from './Details.module.css'
import Collapse from '../components/Collapse'
import { useEffect } from "react";
import jsonData from '../data/logements.json'
import Carousel from "../components/Carousel";

const getAccommodationDataById = (id) => {
  const accommodationFind = jsonData.find(element => element.id === id);
  const accommodationIndex = jsonData.indexOf(accommodationFind);
  return jsonData[accommodationIndex];
};


function DetailsPage() {
  const accommodationData = useLoaderData();

  useEffect(() => {
    document.title = `Kasa | ${accommodationData.title}`;
  }, [accommodationData.title]);

  return (
    <>
      <Carousel pictures={accommodationData.pictures} />
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