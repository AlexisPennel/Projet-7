import styles from './Rating.module.css'
import starFull from '../images/starFull.svg'
import starEmpty from '../images/starEmpty.svg'


const Rating = ({ ratingData }) => {
    const range = [1, 2, 3, 4, 5];

    return (

        <div className={styles.container}>
            {range.map((rangeElem, index) =>
                <img src={ratingData >= rangeElem ? starFull : starEmpty} alt='star' key={index}></img>
            )}
        </div>
    )
};

export default Rating;