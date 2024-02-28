import Header from "../components/Home/Header"
import Slider from "../components/Home/Slider/Slider"
import About from "../components/Home/about/About"
import Gallery from "../components/Home/gallery/Gallery"
import ReliefCards from "../components/Home/reliefs/ReliefCards"
import Review from "../components/Home/reviews/Review"

function Home() {
  return (
    <div>
      <Header />
      <About />
      <ReliefCards />
      <Slider /> 
      <Gallery />
      <Review />
    </div>
  )
}

export default Home
