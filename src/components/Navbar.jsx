import './Navbar.css'

function Navbar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    section.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="/traffic.gif" alt="Traffix Logo" className="navbar-logo" />
        <h1>
          Traffi<span className="highlight-x">x</span>
        </h1>
      </div>
      <div className="navbar-links">
        <a href="#features" onClick={(e) => {
          e.preventDefault()
          scrollToSection('features')
        }}>Features</a>
        <a href="#how-it-works" onClick={(e) => {
          e.preventDefault()
          scrollToSection('how-it-works')
        }}>How It Works</a>
        <a href="#impact" onClick={(e) => {
          e.preventDefault()
          scrollToSection('impact')
        }}>Impact</a>
        <div className="project-links">
          <a href="https://github.com/parthavpovil/traffic-app" target="_blank" rel="noopener noreferrer" className="repo-link">
            <i className="fab fa-github"></i> App
          </a>
          <a href="https://github.com/parthavpovil/traffix-admin" target="_blank" rel="noopener noreferrer" className="repo-link">
            <i className="fab fa-github"></i> Admin
          </a>
          <a href="https://traffix-admin-rosy.vercel.app/" target="_blank" rel="noopener noreferrer" className="hosted-link">
            <i className="fas fa-external-link-alt"></i> Admin Panel
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 