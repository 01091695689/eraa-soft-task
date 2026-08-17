
import React from 'react';
import Button from '../shared/Button';

function Contact() {
  return (
    <div className="contact-page-container">
      <div className="contact-hero-section">
        <div className="contact-overlay"></div>

        <div className="contact-card">
          <h2 className="contact-title">لديك سؤال؟ تواصل معنا الآن</h2>
          <p className="contact-subtitle">أرسل رسالتك وسوف نقوم بالرد في أقرب وقت للتواصل معك</p>

          <form className="contact-form">
            <input 
              type="text" 
              placeholder="الاسم" 
              className="contact-input-field" 
            />
            <textarea 
              rows="4" 
              placeholder="أدخل رسالتك" 
              className="contact-textarea-field" 
            ></textarea>
            
            <Button text="إرسال" type="submit" customStyle={{ width: '100%' }} />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;