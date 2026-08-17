import React from 'react';

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      
      {/* 1. الناحية اليمنى: الكلام والعناوين وأيقونة الشات */}
      <div className="testimonials-text-side">
        <div className="testimonials-titles">
          <span className="subtitle">التقييمات</span>
          <h2>قصص الطلاب!<br />بعض التعليقات الرائعة من طلابنا!</h2>
        </div>
        <p className="desc">
          لوريم إيبسوم لوريم إيبسوم لوريم إيبسوم لوريم إيبسوم لوريم إيبسوم لوريم إيبسوم
        </p>

        <div className="chat-decor-area">
          <div className="chat-icon-top">
            <i className="fa-solid fa-comment-dots"></i>
          </div>
          <div className="dots-grid-bottom">
            <span></span><span></span><span></span><span></span><span></span><span></span>
            <span></span><span></span><span></span><span></span><span></span><span></span>
          </div>
        </div>
      </div>

      {/* 2. المنتصف: الصورة والشرائط الملونة */}
      <div className="testimonials-center-image-area">
        <div className="decor-stripes-bg">
          <span className="stripe"></span>
          <span className="stripe"></span>
          <span className="stripe"></span>
        </div>
        <div className="main-student-img-box">
          <img src="src/assets/team jop.jpg" alt="Student" />
          <div className="quote-box">
            <i className="fa-solid fa-quote-right"></i>
          </div>
        </div>
      </div>

      {/* 3. الناحية اليسرى: كارت التقييم والنقاط */}
      <div className="testimonials-card-side">
        <div className="testimonial-card">
          <div className="testimonial-info">
            <h3>احمد محمد</h3>
            <div className="testimonial-stars">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <p>
              لوريم إيبسوم لوريم إيبسوم لوريم إيبسوم لوريم إيبسوم لوريم إيبسوم لوريم إيبسوم لوريم إيبسوم لوريم إيبسوم
            </p>
          </div>
        </div>

        <div className="slider-dots-line">
          <span></span><span></span><span className="active"></span><span></span><span></span><span></span>
        </div>
      </div>

    </section>
  );
}