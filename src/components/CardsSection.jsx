import styles from './CardsSection.module.css'
import Card from './Card';

const CardsSection = ({ accommodationsData }) => {


    return (
        <section className={styles.section__Accommodations}>
            <div className={styles.Accommodations__box}>
                {accommodationsData.map((logement) => (
                    <Card key={logement.id} id={logement.id} cover={logement.cover} title={logement.title} />
                ))
                }

            </div>
        </section >
    )
};

export default CardsSection;