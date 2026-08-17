import React from 'react';

export default function ContactBanner() {
  return (
    <section className="contact-banner-section">
      <div className="banner-overlay"></div>


      <div className="banner-icon top-left-bookmark">
        <i className="fa-solid fa-bookmark"></i>
      </div>

      <div className="banner-icon left-megaphone">
        <i className="fa-solid fa-bullhorn"></i>
      </div>

      <div className="banner-icon top-right-palette">
        <i className="fa-solid fa-palette"></i>
      </div>

      <div className="banner-dots-pattern top-dots">
        <span></span><span></span><span></span><span></span>
        <span></span><span></span><span></span><span></span>
      </div>

      <div className="banner-dots-pattern bottom-dots">
        <span></span><span></span><span></span><span></span>
        <span></span><span></span><span></span><span></span>
      </div>

      <div className="banner-content">
        <h2>لديك سؤال؟</h2>
        <h3>تواصل معنا الان</h3>
        <p>اتصل على هذا الرقم لأي استفسار!</p>

        <a href="tel:0123456789" className="phone-number-btn">
          <span className="phone-text">0123456789</span>
          <i className="fa-solid fa-phone"></i>
        </a>
      </div>

      <div className="bottom-blob-shape"></div>
    </section>
  );
}