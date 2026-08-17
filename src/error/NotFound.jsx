import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="notfound-wrapper">
      <div className="notfound-container">
        <div className="notfound-box">
          
          <div className="notfound-text-section">
            <h2 className="notfound-title">هذه الصفحة غير متوفرة</h2>
            <p className="notfound-desc">
              هذه الصفحة غير موجودة أو تم إزالتها!<br />
              نقترح عليك العودة إلى الصفحة الرئيسية.
            </p>
            <Link to="/" className="notfound-btn">
              الصفحة الرئيسية
            </Link>
          </div>

          <div className="notfound-image-section">
            <img src="src/assets/404.png" alt="Error 404" />
          </div>

        </div>
      </div>
    </div>
  );
}

export default NotFound;