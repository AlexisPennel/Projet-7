import '../styles/Banner.css'
const Banner = (props) => {
  return (
    <div className="banner__box">
      <h1>Chez vous, partout et ailleurs</h1>
      <img src={props.image} alt="" />
      <div className="banner_filter"></div>
    </div>
  )
}

export default Banner
