import styles from './AccommodationsInfo.module.css'
import starFull from '../images/starFull.svg'
import starEmpty from '../images/starEmpty.svg'

const AccommodationsInfo = ({ infoData }) => {
    // console.log(infoData)
    const range = [1, 2, 3, 4, 5];
    return (
        <>
            <div className={styles.accommodationsInfo__box}>
                <h1>{infoData.title}</h1>
                <p>{infoData.location}</p>
                <div className={styles.tags__box}>
                    {infoData.tags.map((element, index) => (
                        <p key={index}>{element}</p>
                    ))}
                </div>
            </div>
            <div className={styles.host__info}>
                <div className={styles.host__box}>
                    <p>{infoData.host.name}</p>
                    <img src={infoData.host.picture} alt="" />
                </div>
                <div className={styles.host__rating__box}>
                    {range.map((rangeElem, index) =>
                        infoData.rating >= rangeElem ? <img src={starFull} alt='' key={index}></img> : <img src={starEmpty} alt='' key={index}></img>
                    )}
                </div>
            </div>
        </>
    )
};

export default AccommodationsInfo;