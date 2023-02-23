import styles from './Gallery.module.css'

const Gallery = (props) => {
    const pictures = props.pictures;

    return (
        <section className={styles.Gallery__box}>
            <img src={pictures[0]} alt="" />
        </section>
    )
};

export default Gallery;
