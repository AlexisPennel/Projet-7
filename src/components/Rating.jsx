import styles from './Rating.module.css'
import starFull from '../images/starFull.svg'
import starEmpty from '../images/starEmpty.svg'


const Rating = ({ ratingData }) => {
    const range = [1, 2, 3, 4, 5];

    return (

        <div className={styles.host__rating__box}>
            {range.map((rangeElem, index) =>
                ratingData >= rangeElem ? <img src={starFull} alt='' key={index}></img> : <img src={starEmpty} alt='' key={index}></img>
            )}
        </div>
    )
};

export default Rating;