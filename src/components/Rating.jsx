import starFull from '../images/starFull.svg'
import starEmpty from '../images/starEmpty.svg'
import styles from './Rating.module.css'

const Rating = ({ element, rating }) => {

    return (

        <img src={element > rating ? starEmpty : starFull} alt='star' className={styles.stars}></img>

    )
};

export default Rating;