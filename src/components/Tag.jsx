import styles from './Tag.module.css';


const Tag = ({ tagsData }) => {
    return (
        <>
            <div className={styles.tags__box}>
                {tagsData.map((element, index) => (
                    <p key={index}>{element}</p>
                ))}
            </div>
        </>
    )
};

export default Tag;