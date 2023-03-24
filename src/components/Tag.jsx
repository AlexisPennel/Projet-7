import styles from './Tag.module.css'

const Tag = ({ element }) => {
    return (
        <>
            <p className={styles.tag}>{element}</p>
        </>
    )
};

export default Tag;