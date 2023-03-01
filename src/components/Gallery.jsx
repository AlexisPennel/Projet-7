import styles from './Gallery.module.css'
import arrowLeft from '../images/arrowLeft.svg';
import arrowRight from '../images/arrowRight.svg';


const Gallery = (props) => {
    const pictures = props.pictures;

    return (
        <section className={styles.gallery__box}>
            <img src={pictures[0]} alt="" />
            <div className={styles.gallery__arrows__box}>
                <img src={arrowLeft} alt="" />
                <img src={arrowRight} alt="" />
            </div>
            <p className={styles.gallery__targetPoints}>1/4</p>
        </section>
    )
};

export default Gallery;
