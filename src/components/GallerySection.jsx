import styles from './GallerySection.module.css'
import arrowLeft from '../images/arrowLeft.svg';
import arrowRight from '../images/arrowRight.svg';
import { useState } from 'react';


const GallerySection = ({ pictures }) => {

    const [current, setCurrent] = useState(0);
    const length = pictures.length;

    const handlePrev = () => {
        const newIndex = current - 1;
        setCurrent(newIndex < 0 ? length - 1 : newIndex);

    };

    const handleNext = () => {
        const newIndex = current + 1;
        setCurrent(newIndex === length ? 0 : newIndex);

    };

    const switchPicture = (index) => {
        setCurrent(index)
    }

    return (
        <section className={styles.gallery__box}>
            <div className={styles.gallery__arrows__box}>
                <img src={arrowLeft} alt="" onClick={handlePrev} />
                <img src={arrowRight} alt="" onClick={handleNext} />
            </div>
            <div className={styles.gallery__pictures__box}>
                {pictures.map((pictures, index) => {
                    return (
                        <>
                            <div key={index} className={index === current ? styles.picture__active : styles.picture__inactive}>
                                <img src={pictures} alt='' />
                            </div>
                        </>
                    )
                })}

                <div className={styles.bulletPoints__box}>
                    {pictures.map((pictures, index) => {
                        return (
                            <div key={index} className={index === current ? styles.bullet__points__active : styles.bullet__points} onClick={() => switchPicture(index)}></div>
                        )
                    })}
                </div>

            </div>
            <p className={styles.gallery__targetPoints}>{current + 1} / {length}</p>
        </section>
    )











    // const [index, setIndex] = useState(0);
    // const [picture, setPicture] = useState(pictures[index]);
    // const length = pictures.length;

    // const handlePrevious = () => {
    //     const newIndex = index - 1;
    //     setIndex(newIndex < 0 ? length - 1 : newIndex);
    //     setPicture(pictures[index]);
    // };

    // const handleNext = () => {
    //     const newIndex = index + 1;
    //     setIndex(newIndex === length ? 0 : newIndex);
    //     setPicture(pictures[index]);
    // };


    // return (
    //     <section className={styles.gallery__box}>
    //         <img src={picture} alt="" />
    //         <div className={styles.gallery__arrows__box}>
    //             <img src={arrowLeft} alt="" onClick={handlePrevious} />
    //             <img src={arrowRight} alt="" onClick={handleNext} />
    //         </div>
    //         <p className={styles.gallery__targetPoints}>{index + 1} / {length}</p>
    //     </section>
    // )
};

export default GallerySection;
