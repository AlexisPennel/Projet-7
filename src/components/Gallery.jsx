import styles from './Gallery.module.css'
import { Link, useLoaderData } from 'react-router-dom';

const Gallery = () => {
    const dataG = useLoaderData();
    console.log(dataG)

    return (
        <section className={styles.section__gallery}>
            <div className={styles.gallery__box}>
                {dataG.map((logement) => (
                    <Link to={`/details/${logement.id}`} key={`${logement.id}`} className={styles.gallery__cards} >
                        <img src={logement.cover} alt={`logement ${logement.title}`} />
                        <h2>{logement.title}</h2>
                        <div className={styles.cards__filter}></div>
                    </Link>
                ))
                }
            </div>
        </section >
    )
};

export default Gallery;