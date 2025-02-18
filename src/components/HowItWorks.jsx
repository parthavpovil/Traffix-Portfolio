import './HowItWorks.css'

function HowItWorks() {
  return (
    <section id="how-it-works" className="how-it-works">
      <h2>How It Works</h2>
      <div className="steps-container">
        <div className="step">
          <div className="step-number">1</div>
          <h3>Report Violation</h3>
          <p>Upload images of traffic violations along with location and description to the platform.</p>
        </div>

        <div className="step">
          <div className="step-number">2</div>
          <h3>Verification</h3>
          <p>Admin reviews and verifies the authenticity of the reported violation.</p>
        </div>

        <div className="step">
          <div className="step-number">3</div>
          <h3>Reward & Record</h3>
          <p>Valid reports are recorded on blockchain and reporters receive rewards.</p>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks 