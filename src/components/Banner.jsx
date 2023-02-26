import styles from './Banner.module.css'


const Banner = ({ title, image }) => {


  return (
    <div className={styles.banner__box}>
      {title && <h1>{title}</h1>}
      <img src={image} alt="" />
      <div className={styles.banner__filter}></div>
    </div>
  )
};

export default Banner;
