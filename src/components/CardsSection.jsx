import styles from './CardsSection.module.css'
import Card from './Card';

const CardsSection = ({ accommodationsData }) => {


    return (
        <section className={styles.container}>
            <div className={styles.accommodations__container}>
                {accommodationsData.map((logement) => (
                    <Card key={logement.id} id={logement.id} cover={logement.cover} title={logement.title} />
                ))
                }

            </div>
        </section >
    )
};

export default CardsSection;