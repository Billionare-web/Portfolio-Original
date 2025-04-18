import About from "@/components/shared/about"
import Footer from "@/components/shared/footer"
import GetInTouch from "@/components/shared/getintouch"
import Header from "@/components/shared/header"
import Skills from "@/components/shared/skills"
import Testimonials from "@/components/shared/testimonials"
import Work from "@/components/shared/work"


const Home = () => {
  return (
    <div className="Home">
        <Header/>
        <About/>
        <Skills/>
        <Work/>
        <Testimonials/>
        <GetInTouch/>
        <Footer/>
    </div>
  )
}

export default Home