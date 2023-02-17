import styles from './Banner.module.css'


const Banner = (props) => {
  const title = props.title

  return (
    <div className={styles.banner__box}>
      {title && <h1>{title}</h1>}
      <img src={props.image} alt="" />
      <div className={styles.banner__filter}></div>
    </div>
  )
};

export default Banner;
