import { Link } from "react-router-dom";
import styles from './Card.module.css';


const Card = ({ id, cover, title, accommodationData }) => {

    return (
        < Link to={`/details/${id}`} className={styles.Accommodations__cards} state={{ accommodationData: accommodationData }} >
            <img src={cover} alt={`logement ${title}`} />
            <h2>{title}</h2>
            <div className={styles.cards__filter}></div>
        </Link>
    )


};

export default Card;