import styles from './Home.module.css'
import Banner from '../components/Banner'
import bannerImage from '../images/Banner.jpg'
import Accomodations from '../components/Accomodations'




function HomePage() {

  return (
    <div className={styles.home}>
      <Banner image={bannerImage} title={'Chez vous, partout et ailleurs'} />
      <Accomodations />
    </div>
  )
}

export default HomePage
