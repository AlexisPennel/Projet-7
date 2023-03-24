import { Link } from "react-router-dom";
import styles from './Card.module.css';


const Card = ({ id, cover, title }) => {

    return (
        < Link to={`/details/${id}`} className={styles.Accommodations__cards}  >
            <img src={cover} alt={title} />
            <h2>{title}</h2>
            <div className={styles.cards__filter}></div>
        </Link>
    )


};

export default Card;