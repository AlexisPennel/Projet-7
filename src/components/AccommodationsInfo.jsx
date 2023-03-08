import styles from './AccommodationsInfo.module.css'
import Rating from './Rating';
import Tag from './Tag';

const AccommodationsInfo = ({ accommodationData }) => {

    return (
        <>
            <div className={styles.container}>
                <h1>{accommodationData.title}</h1>
                <p>{accommodationData.location}</p>
                <Tag tagsData={accommodationData.tags} />
            </div>
            <div className={styles.host__info}>
                <div className={styles.host__info__container}>
                    <p>{accommodationData.host.name}</p>
                    <img src={accommodationData.host.picture} alt={accommodationData.host.name} />
                </div>
                <Rating ratingData={accommodationData.rating} />
            </div>
        </>
    )
};

export default AccommodationsInfo;