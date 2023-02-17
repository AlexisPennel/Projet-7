import styles from './Gallery.module.css'
import { useLoaderData } from 'react-router-dom';

const Gallery = () => {
    const dataG = useLoaderData();
    console.log(dataG)

    return (
        <section className={styles.section__gallery}>
            <div className={styles.gallery__box}>
                {dataG.map((logement) => (
                    <div key={`${logement.id}`} className={styles.gallery__cards} >
                        <img src={logement.cover} alt="" />
                        <h2>{logement.title}</h2>
                        <div className={styles.cards__filter}></div>
                    </div>
                ))
                }
            </div>
        </section >
    )
};

export default Gallery;