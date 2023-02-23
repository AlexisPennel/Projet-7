import Gallery from "../components/Gallery"
import { useLocation } from 'react-router-dom';
import AccommodationsInfo from "../components/AccommodationsInfo";
import styles from './Details.module.css'
import Collapse from '../components/Collapse'

function DetailsPage() {
  const location = useLocation();
  const { productData } = location.state;

  return (
    <>
      <Gallery />
      <div className={styles.accommodationsInfo__box}>
        <AccommodationsInfo data={productData} />
      </div>
      <div className={styles.accommodationCollapse__section}>
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
      </div>
    </>
  )
}

export default DetailsPage
