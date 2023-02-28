import Banner from '../components/Banner'
import Collapse from '../components/Collapse'
import BannerAbout from '../images/BannerAbout.jpg'
import styles from './About.module.css'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useLoaderData } from 'react-router-dom'

const getAboutData = () => {
  const dataAbout = [
    { title: 'Fiabilité', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin libero eros, vulputate nec arcu sit amet, elementum ultricies urna. Integer fermentum in metus nec auctor. Integer sodales quam felis, vitae pretium leo fermentum at. Duis consectetur tortor nec turpis dictum luctus. Curabitur pellentesque posuere sapien. Praesent iaculis volutpat mi ac" },
    { title: 'Respect', content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." },
    { title: 'Service', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin libero eros, vulputate nec arcu sit amet, elementum ultricies urna. Integer fermentum in metus nec auctor. Integer sodales quam felis, vitae pretium leo fermentum at. Duis consectetur tortor nec turpis dictum luctus. Curabitur pellentesque posuere sapien. Praesent iaculis volutpat mi ac" },
    { title: 'Responsabilité', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin libero eros, vulputate nec arcu sit amet, elementum ultricies urna. Integer fermentum in metus nec auctor. Integer sodales quam felis, vitae pretium leo fermentum at. Duis consectetur tortor nec turpis dictum luctus. Curabitur pellentesque posuere sapien. Praesent iaculis volutpat mi ac" }
  ];

  return dataAbout
};

function AboutPage() {
  const dataAbout = useLoaderData();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Kasa | A propos </title>
      </Helmet>
      <Banner image={BannerAbout} />
      <section className={styles.collapse__section}>
        <div className={styles.collapse__box__container} >
          {dataAbout.map((element, index) => (
            <Collapse key={index} title={element.title} content={element.content} />
          ))}
        </div>
      </section>
    </>
  )
}

export default AboutPage
export { getAboutData };