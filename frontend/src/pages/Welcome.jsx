import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/welcome.css";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <nav className="app-nav">
        <div className="nav-content">
          <div className="logo">
            <span className="coffee-icon">☕</span>
            <h1>TCN Stock</h1>
          </div>
          <div className="nav-links">
            <button onClick={() => navigate("/login")}>Sign In</button>
          </div>
        </div>
      </nav>

      <main className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h2>Cafe Inventory Management</h2>
            <h1>
              Perfect Stock,
              <br />
              Every Brew
            </h1>
            <p className="description">
              Track coffee beans, ingredients, and supplies across all your cafe
              locations with real-time inventory control
            </p>
          </div>

          <div className="dashboard-preview">
            <div className="stock-card">
              <div className="stock-item">
                <span className="item-icon">🌱</span>
                <div className="item-details">
                  <h3>Arabica Beans</h3>
                  <div className="stock-meter">
                    <div className="meter-fill" style={{ width: "65%" }}></div>
                    <span>42/65 kg</span>
                  </div>
                </div>
              </div>
              <div className="stock-item">
                <span className="item-icon">🥐</span>
                <div className="item-details">
                  <h3>Croissants</h3>
                  <div className="stock-meter">
                    <div className="meter-fill" style={{ width: "30%" }}></div>
                    <span>12/40 units</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cta-section">
            <button className="primary-cta" onClick={() => navigate("/login")}>
              Manage Inventory
              <span className="arrow">→</span>
            </button>
            <button className="secondary-cta" onClick={() => navigate("/demo")}>
              Watch Demo
            </button>
          </div>
        </div>
      </main>

      <section className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">📦</div>
          <h3>Supplier Tracking</h3>
          <p>Manage orders & deliveries</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">📈</div>
          <h3>Sales Analytics</h3>
          <p>Predict ingredient needs</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">📱</div>
          <h3>Mobile App</h3>
          <p>Update stock on-the-go</p>
        </div>
      </section>

      <div className="security-badge">
        <span className="lock-icon">🔒</span>
        <span>Secure Cloud Storage • Daily Backups</span>
      </div>
    </div>
  );
}

export default Welcome;
