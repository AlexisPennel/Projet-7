import styles from './Accomodations.module.css'
import { Link, useLoaderData } from 'react-router-dom';

const Accommodations = () => {
    const dataG = useLoaderData();
    console.log(dataG)

    return (
        <section className={styles.section__Accommodations}>
            <div className={styles.Accommodations__box}>
                {dataG.map((logement) => (
                    < Link to={`/details/${logement.id}`} key={`${logement.id}`} className={styles.Accommodations__cards} >
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

export default Accommodations;