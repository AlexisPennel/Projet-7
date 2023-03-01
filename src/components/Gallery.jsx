import styles from './Gallery.module.css'
import arrowLeft from '../images/arrowLeft.svg';
import arrowRight from '../images/arrowRight.svg';
import { useState } from 'react';


const Gallery = ({ pictures }) => {
    const [index, setIndex] = useState(0);
    const [picture, setPicture] = useState(pictures[index]);
    const length = pictures.length;

    const handlePrevious = () => {
        const newIndex = index - 1;
        setIndex(newIndex < 0 ? length - 1 : newIndex);
        setPicture(pictures[index]);
    };

    const handleNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex === length ? 0 : newIndex);
        setPicture(pictures[index]);
    };


    return (
        <section className={styles.gallery__box}>
            <img src={picture} alt="" />
            <div className={styles.gallery__arrows__box}>
                <img src={arrowLeft} alt="" onClick={handlePrevious} />
                <img src={arrowRight} alt="" onClick={handleNext} />
            </div>
            <p className={styles.gallery__targetPoints}>{index + 1} / {length}</p>
        </section>
    )
};

export default Gallery;
