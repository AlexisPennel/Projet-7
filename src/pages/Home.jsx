import styles from './Home.module.css'
import Banner from '../components/Banner'
import bannerImage from '../images/Banner.jpg'
import AccommodationsCards from '../components/AccommodationsCards'
import { useEffect } from 'react'



function HomePage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.home}>
      <Banner image={bannerImage} title={'Chez vous, partout et ailleurs'} />
      <AccommodationsCards />
    </div>
  )
}

export default HomePage
