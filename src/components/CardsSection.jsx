import styles from './CardsSection.module.css'
import { useLoaderData } from 'react-router-dom';
import Card from './Card';

const AccommodationsCards = () => {
    const accommodationsData = useLoaderData();

    return (
        <section className={styles.section__Accommodations}>
            <div className={styles.Accommodations__box}>
                {accommodationsData.map((logement) => (
                    <Card key={logement.id} id={logement.id} cover={logement.cover} title={logement.title} accommodationData={logement} />
                ))
                }

            </div>
        </section >
    )
};

export default AccommodationsCards;