import './Hero.css'

function Hero() {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features')
    featuresSection.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero">
      <div className="hero-content">
        <img src="/traffic.gif" alt="Traffix Logo" className="hero-logo" />
        <h1>
          Traffi<span className="highlight-x">x</span>
        </h1>
        <h2>A Decentralized Traffic Violation Reporting System</h2>
        <p>
          Empowering citizens to create safer roads through blockchain-based 
          traffic violation reporting with transparency and incentives.
        </p>
        <button className="cta-button" onClick={scrollToFeatures}>
          Learn More
        </button>
      </div>
    </section>
  )
}

export default Hero 