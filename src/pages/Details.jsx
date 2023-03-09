import { useLoaderData } from 'react-router-dom';
import AccommodationsInfo from "../components/AccommodationsInfo";
import styles from './Details.module.css'
import Collapse from '../components/Collapse'
import jsonData from '../data/logements.json'
import Carousel from "../components/Carousel";

const getAccommodationDataById = ({ params }) => {
  return jsonData.find(element => element.id === params.id);
};


function DetailsPage() {
  const accommodationData = useLoaderData();

  document.title = `Kasa | ${accommodationData.title}`;


  return (
    <>
      <Carousel pictures={accommodationData.pictures} title={accommodationData.title} />
      <section className={styles.accommodationsInfo__section}>
        <AccommodationsInfo accommodationData={accommodationData} />
      </section>
      <section className={styles.accommodationCollapse__section}>
        <div className={styles.collapse__container}>
          <Collapse title={'Description'} content={accommodationData.description} />
        </div>
        <div className={styles.collapse__container}>
          <Collapse title={'Équipements'} content={accommodationData.equipments} />
        </div>
      </section>
    </>
  )
}

export default DetailsPage
export { getAccommodationDataById };