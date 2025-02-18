import './WorkingDetails.css'

function WorkingDetails() {
  return (
    <section id="working-details" className="working-details">
      <h2>Detailed Working</h2>
      
      <div className="working-container">
        {/* Mobile App Section */}
        <div className="working-section">
          <h3>Mobile Application</h3>
          <div className="prerequisites">
            <h4>Prerequisites</h4>
            <ul>
              <li>
                <i className="fas fa-wallet"></i>
                <span>Ethereum Wallet (Sepolia Network)</span>
              </li>
              <li>
                <i className="fas fa-mobile-alt"></i>
                <span>Android/iOS Device</span>
              </li>
            </ul>
          </div>
          
          <div className="features-list">
            <div className="feature-item">
              <i className="fas fa-file-upload"></i>
              <div>
                <h5>Report Violations</h5>
                <p>Capture and submit traffic violations with location data and description</p>
              </div>
            </div>
            
            <div className="feature-item">
              <i className="fas fa-history"></i>
              <div>
                <h5>Track Reports</h5>
                <p>View your submitted reports and their verification status</p>
              </div>
            </div>
            
            <div className="feature-item">
              <i className="fas fa-globe"></i>
              <div>
                <h5>Public Reports</h5>
                <p>Access verified public reports from other users</p>
              </div>
            </div>
            
            <div className="feature-item">
              <i className="fas fa-map-marked-alt"></i>
              <div>
                <h5>Hotspot Detection</h5>
                <p>Identify areas with frequent traffic violations</p>
              </div>
            </div>
          </div>
        </div>

        {/* Admin Dashboard Section */}
        <div className="working-section">
          <h3>Admin Dashboard</h3>
          <div className="prerequisites">
            <h4><i className="fas fa-shield-alt"></i>Access Control</h4>
            <p>
              <i className="fas fa-lock"></i>
              <span>Exclusive access for contract owner</span>
            </p>
          </div>
          
          <div className="features-list">
            <div className="feature-item">
              <i className="fas fa-tasks"></i>
              <div>
                <h5>Report Management</h5>
                <p>Review and verify submitted violation reports</p>
              </div>
            </div>
            
            <div className="feature-item">
              <i className="fas fa-coins"></i>
              <div>
                <h5>Incentive Distribution</h5>
                <p>Send rewards for valid violation reports</p>
              </div>
            </div>
            
            <div className="feature-item">
              <i className="fas fa-chart-bar"></i>
              <div>
                <h5>Analytics Dashboard</h5>
                <p>View statistics and trends of violations</p>
              </div>
            </div>
            
            <div className="feature-item">
              <i className="fas fa-map-pin"></i>
              <div>
                <h5>Hotspot Monitoring</h5>
                <p>Track areas with high violation frequencies</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blockchain-integration">
        <h4><i className="fas fa-link"></i> Blockchain Integration</h4>
        <p>Both the mobile app and admin dashboard interact directly with the Ethereum blockchain, ensuring transparency and immutability of all reports and actions.</p>
      </div>
    </section>
  )
}

export default WorkingDetails 