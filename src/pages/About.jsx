import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import BannerAbout from '../images/BannerAbout.jpg'
function AboutPage() {
  return (
    <div>
      <h1>A propos</h1>
      <Header />
      <Banner image={BannerAbout} />
      <Footer />
    </div>
  )
}

export default AboutPage
