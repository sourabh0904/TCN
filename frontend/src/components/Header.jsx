import { useEffect, useState } from "react";
import {
  ArrowLeftOnRectangleIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import "../styles/Header.css";
import Logo from "../assets/Logo.png";

const Header = ({ user, handleLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user) setIsLoading(false);
  }, [user]);

  if (isLoading) {
    return (
      <header className="header-loading">
        <div className="loading-avatar" />
        <div className="loading-text">
          <div className="loading-line name" />
          <div className="loading-line email" />
        </div>
      </header>
    );
  }

  return (
    <header className="header-container">
      <div className="header-content">
        {/* Logo Section */}
        <div className="logo-container">
          <img src={Logo} alt="TCN Logo" className="header-logo" />
          <span className="logo-text">TCN Inventory</span>
        </div>

        {/* Desktop User Section */}
        <div className="user-section">
          <div className="user-profile">
            <img
              src={user?.photoURL || "/default-avatar.png"}
              alt="Profile"
              className="user-avatar"
              onError={(e) => {
                e.target.src = "/default-avatar.png";
              }}
            />
            <div className="user-info">
              <h2 className="user-name">{user?.displayName || "Guest User"}</h2>
              <p className="user-email">{user?.email}</p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="logout-button"
            title="Logout"
          >
            <ArrowLeftOnRectangleIcon className="logout-icon" />
            <span className="logout-text">Sign Out</span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="mobile-menu">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mobile-menu-button"
          >
            {user ? (
              <img src={user.photoURL} alt="Photo" className="user-avatar" />
            ) : (
              <UserCircleIcon className="menu-icon" />
            )}
          </button>

          {isMenuOpen && (
            <div className="mobile-menu-dropdown">
              <div className="mobile-user-info">
                <img
                  src={user?.photoURL || "/default-avatar.png"}
                  alt="Profile"
                  className="mobile-avatar"
                />
                <div>
                  <p className="mobile-user-name">{user?.displayName}</p>
                  <p className="mobile-user-email">{user?.email}</p>
                </div>
              </div>
              <button onClick={handleLogout} className="mobile-logout-button">
                <ArrowLeftOnRectangleIcon className="mobile-logout-icon" />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
