
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTiktok, 
  faInstagram, 
  faFacebookF, 
  faTelegram 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faLocationDot, 
  faEnvelope, 
  faPhone, 
  faChevronLeft 
} from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer className="footer-main">
      <div className="footer-container">
        
        <div className="footer-columns-grid">
        
          <div className="footer-col">
            <img src="src/assets/logo.png" alt="Eraasoft Logo" className="footer-logo-img" />
            <p className="footer-col-text">تعلم البرمجة لمستقبل أفضل بمساعدتك ليصل لصلحك</p>
          </div>

          <div className="footer-col">
            <h3 className="footer-col-title">تصفح</h3>
            <ul className="footer-list">
              <li><a href="#" className="footer-link"><FontAwesomeIcon icon={faChevronLeft}
               className="footer-arrow-icon" /> الدورات</a></li>
              <li><a href="#" className="footer-link"><FontAwesomeIcon icon={faChevronLeft} 
              className="footer-arrow-icon" /> المعلمين</a></li>
              <li><a href="#" className="footer-link"><FontAwesomeIcon icon={faChevronLeft} 
              className="footer-arrow-icon" /> عن ايراسوفت</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="footer-col-title">معلومات</h3>
            <ul className="footer-list">
              <li><a href="#" className="footer-link"><FontAwesomeIcon icon={faChevronLeft}
               className="footer-arrow-icon" /> تسجيل دخول</a></li>
              <li><a href="#" className="footer-link"><FontAwesomeIcon icon={faChevronLeft} 
              className="footer-arrow-icon" /> إنشاء حساب</a></li>
              <li><a href="#" className="footer-link"><FontAwesomeIcon icon={faChevronLeft} 
              className="footer-arrow-icon" /> تواصل معنا</a></li>
            </ul>
          </div>
        
          <div className="footer-col">
            <h3 className="footer-col-title">تواصل معنا</h3>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <span>مصَدّق، الدقي</span>
                <FontAwesomeIcon icon={faLocationDot} className="footer-contact-icon" />
              </li>
              <li className="footer-contact-item">
                <span>email@example.com</span>
                <FontAwesomeIcon icon={faEnvelope} className="footer-contact-icon" />
              </li>
              <li className="footer-contact-item">
                <span>0123456789</span>
                <FontAwesomeIcon icon={faPhone} className="footer-contact-icon" />
              </li>
            </ul>
          </div>

        </div>

        <div className="footer-middle-bar">
          
          <div className="footer-social-icons">
            <a href="#" className="footer-social-icon"><FontAwesomeIcon icon={faTelegram} /></a>
            <a href="#" className="footer-social-icon"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#" className="footer-social-icon"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#" className="footer-social-icon"><FontAwesomeIcon icon={faTiktok} /></a>
          </div>
        
          <div className="footer-newsletter">
            <span className="footer-newsletter-title">آخر الأخبار</span>
            <div className="footer-newsletter-form">
              <input type="email" placeholder="البريد الإلكتروني" className="footer-input" />
              <button className="footer-subscribe-btn">اشترك</button>
            </div>
          </div>
        </div>

      </div>
      
      <div className="footer-bottom-bar">
        <p className="footer-copyright-text">Eraasoft &copy; 2024. All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;