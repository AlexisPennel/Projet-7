import Banner from '../components/Banner'
import Collapse from '../components/Collapse'
import BannerAbout from '../images/BannerAbout.jpg'
import styles from './About.module.css'

function AboutPage() {
  return (
    <div>
      <Banner image={BannerAbout} />
      <section className={styles.collapse__box}>
        <Collapse
          size={'large'}
          title={'Fiabilité'}
          content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin libero eros, vulputate nec arcu sit amet, elementum ultricies urna. Integer fermentum in metus nec auctor. Integer sodales quam felis, vitae pretium leo fermentum at. Duis consectetur tortor nec turpis dictum luctus. Curabitur pellentesque posuere sapien. Praesent iaculis volutpat mi ac'} />
        <Collapse
          size={'large'}
          title={'Respect'}
          content={'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'} />
        <Collapse
          size={'large'}
          title={'Service'}
          content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin libero eros, vulputate nec arcu sit amet, elementum ultricies urna. Integer fermentum in metus nec auctor. Integer sodales quam felis, vitae pretium leo fermentum at. Duis consectetur tortor nec turpis dictum luctus. Curabitur pellentesque posuere sapien. Praesent iaculis volutpat mi ac'} />
        <Collapse
          size={'large'}
          title={'Responsabilité'}
          content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin libero eros, vulputate nec arcu sit amet, elementum ultricies urna. Integer fermentum in metus nec auctor. Integer sodales quam felis, vitae pretium leo fermentum at. Duis consectetur tortor nec turpis dictum luctus. Curabitur pellentesque posuere sapien. Praesent iaculis volutpat mi ac'} />
      </section>
    </div>
  )
}

export default AboutPage
