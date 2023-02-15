import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/Home.css'
import '../styles/index.css'
import Banner from '../components/Banner'
import bannerImage from '../images/Banner.jpg'

function HomePage() {
  return (
    <div className="home">
      <h1>Accueil</h1>
      <Header />
      <Banner image={bannerImage} />
      <Footer />
    </div>
  )
}

export default HomePage
