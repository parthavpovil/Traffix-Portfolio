import './FutureFeatures.css'

function FutureFeatures() {
  return (
    <section id="future-features" className="future-features">
      <h2>Coming Soon</h2>
      <div className="future-container">
        <div className="future-card">
          <div className="card-header">
            <i className="fas fa-robot"></i>
            <h3>Advanced Verification Mechanism</h3>
          </div>
          <div className="card-content">
            <div className="feature-point">
              <i className="fas fa-brain"></i>
              <p>AI-powered image analysis to detect fake or manipulated reports</p>
            </div>
            <div className="feature-point">
              <i className="fas fa-sync-alt"></i>
              <p>Cross-referencing reports with real-time traffic data for authenticity</p>
            </div>
          </div>
        </div>

        <div className="future-card">
          <div className="card-header">
            <i className="fas fa-star"></i>
            <h3>Reputation System</h3>
          </div>
          <div className="card-content">
            <div className="feature-point">
              <i className="fas fa-chart-line"></i>
              <p>Users earn a trust score based on accurate reporting history</p>
            </div>
            <div className="feature-point">
              <i className="fas fa-award"></i>
              <p>High-trust users get higher rewards and faster verification</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FutureFeatures 