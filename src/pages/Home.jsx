import styles from './Home.module.css'
import Banner from '../components/Banner'
import bannerImage from '../images/Banner.jpg'
import Gallery from '../components/Gallery'




function HomePage() {

  return (
    <div className={styles.home}>
      <Banner image={bannerImage} title={'Chez vous, partout et ailleurs'} />
      <Gallery />
    </div>
  )
}

export default HomePage
