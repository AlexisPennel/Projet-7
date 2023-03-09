import styles from './AccommodationsInfo.module.css'
import Rating from './Rating';
import Tag from './Tag';

const AccommodationsInfo = ({ accommodationData }) => {
    const ratingRange = [1, 2, 3, 4, 5];

    return (
        <>
            <div className={styles.container}>
                <h1>{accommodationData.title}</h1>
                <p>{accommodationData.location}</p>
                <div className={styles.tags__container}>
                    {accommodationData.tags.map((element, index) => (
                        <Tag key={index} element={element} />
                    ))}

                </div>
            </div>
            <div className={styles.host__info}>
                <div className={styles.host__info__container}>
                    <p>{accommodationData.host.name}</p>
                    <img src={accommodationData.host.picture} alt={accommodationData.host.name} />
                </div>
                <div className={styles.rating__container}>
                    {ratingRange.map((element, index) => (
                        <Rating key={index} element={element} rating={accommodationData.rating} />
                    ))}
                </div>



                {/* <Rating ratingData={accommodationData.rating} /> */}
            </div>
        </>
    )
};

export default AccommodationsInfo;