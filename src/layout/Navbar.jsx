
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Button from '../shared/Button';

function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <nav className="navbar-container">
      {/* Right: Logo */}
      <div className="navbar-logo-container">
        <Link to="/">
          <img src="src/assets/logo.png" alt="Logo" className="navbar-logo" />
        </Link>
      </div>

      <ul className="navbar-links">
        <li><Link to="/" className="navbar-link">الرئيسية</Link></li>
        <li><Link to="/courses" className="navbar-link">الدورات</Link></li>
        <li><Link to="/solutions" className="navbar-link">حلول برمجية</Link></li>
        <li><Link to="/articles" className="navbar-link">المقالات</Link></li>
        <li><Link to="/about" className="navbar-link">من نحن</Link></li>
        <li><Link to="/contact" className="navbar-link">تواصل معنا</Link></li>
      </ul>

   
      <div className="navbar-left-section">
        <div className="navbar-search-wrapper">
          {isSearchOpen && (
            <input 
              type="text" 
              placeholder="Search..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="navbar-search-input"
            />
          )}
          <button 
            onClick={() => setIsSearchOpen(!isSearchOpen)} 
            className="navbar-search-btn"
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>

        <Button text="اشترك الآن" onClick={() => alert('Clicked')} />
      </div>
    </nav>
  );
}

export default Navbar;