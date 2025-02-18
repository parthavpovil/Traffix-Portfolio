import './Features.css'

function Features() {
  return (
    <section id="features" className="features">
      <h2>Key Features</h2>
      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">🔗</div>
          <h3>Blockchain-Based</h3>
          <p>All reports are stored immutably on the blockchain, ensuring transparency and preventing manipulation.</p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">🎁</div>
          <h3>Reward System</h3>
          <p>Users receive incentives for submitting valid violation reports, encouraging active participation.</p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">🌐</div>
          <h3>Decentralized</h3>
          <p>No central authority can manipulate or erase reports, ensuring data integrity.</p>
        </div>
      </div>
    </section>
  )
}

export default Features 