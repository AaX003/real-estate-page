import Navbar from './Nav'
import Hero from './Hero'
import Properties from './Properties'
import Types from './Types'
import About from './About'
import Newsletter from './Newsletter'
import Footer from './Footer'
import HowTo from './HowTo'
import Showcase from './Showcase'
import FAQ from './FAQ'
import Services from './Services'
import Contact from './Contact'
import MeetRealtor from './MeetRealtor'

function Root() {

  return (
    <div className="main-content">
      <Navbar />
      <Hero />
      <section id="types">
        <Types />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="howto">
        <HowTo />
      </section>
      <section id="showcase">
        <Showcase />
      </section>
      <section id="properties">
        <Properties />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="newsletter">
        <Newsletter />
      </section>
      <section id="realtor">
        <MeetRealtor />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  )
}

export default Root
