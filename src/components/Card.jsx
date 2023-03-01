import { NavLink } from "react-router-dom";
import styles from './Card.module.css';


const Card = ({ id, cover, title, accommodationData }) => {

    return (
        < NavLink to={`/details/${id}`} key={`${id}`} className={styles.Accommodations__cards} state={{ accommodationData: accommodationData }} >
            <img src={cover} alt={`logement ${title}`} />
            <h2>{title}</h2>
            <div className={styles.cards__filter}></div>
        </NavLink>
    )


};

export default Card;