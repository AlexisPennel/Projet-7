import styles from './Carousel.module.css'
import arrowLeft from '../images/arrowLeft.svg';
import arrowRight from '../images/arrowRight.svg';
import { useEffect, useState } from 'react';


const Carousel = ({ pictures }) => {
    const [current, setCurrent] = useState(0);
    const [bulletDisplay, setBulletDisplay] = useState(true);
    const length = pictures.length;

    // Vérification du nombre de photos 
    const checkPicturesLenght = () => {
        if (length === 1) {
            setBulletDisplay(false);
            return
        }
    };

    // Appel de la fonction de vérification du nombre de photos au render
    useEffect(() => {
        checkPicturesLenght();
    })

    // Événements flèches suivantes et précédentes
    const handlePrev = () => {
        const newIndex = current - 1;
        setCurrent(newIndex < 0 ? length - 1 : newIndex);

    };

    const handleNext = () => {
        const newIndex = current + 1;
        setCurrent(newIndex === length ? 0 : newIndex);

    };

    // Événement changement d'image Bullet point 
    const switchPicture = (index) => {
        setCurrent(index)
    }

    return (
        <section className={styles.section}>
            <div className={styles.pictures__container}>
                {pictures.map((pictures, index) => {
                    return (
                        <div key={index} className={index === current ? styles.picture__active : styles.picture__inactive}>
                            <img src={pictures} alt='' />
                        </div>

                    )
                })}
            </div>

            {bulletDisplay && <div className={styles.arrows__container}>
                <img src={arrowLeft} alt="" onClick={handlePrev} />
                <img src={arrowRight} alt="" onClick={handleNext} />
            </div>}

            {bulletDisplay && <div className={styles.bulletPoints__container}>
                {pictures.map((pictures, index) => {
                    return (
                        <div key={index} className={index === current ? styles.bulletPoints__active : styles.bulletPoints} onClick={() => switchPicture(index)}></div>
                    )
                })}
            </div>}

            {bulletDisplay && <p className={styles.targetNumbers}>{current + 1} / {length}</p>}
        </section>
    )
};

export default Carousel;
