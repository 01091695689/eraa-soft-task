import React from 'react';
import { Link } from 'react-router-dom';

export default function InstructorsSection() {
  return (
    <section className="instructors-section">
  
      <div className="instructors-slider-area">
        <div className="instructors-grid">
      

          <div className="instructor-card">
            <div className="instructor-img-box">
              <img src="src/assets/team jop.jpg" alt="Instructor" />
            </div>
            <div className="instructor-info-box">
              <h3>احمد محمد</h3>
              <div className="instructor-meta">
                <span><i className="fa-solid fa-star"></i> 5</span>
                <span>Developer <i className="fa-solid fa-graduation-cap"></i></span>
                <span>+60 <i className="fa-solid fa-clock"></i></span>
              </div>
            </div>
          </div>

          
          <div className="instructor-card">
            <div className="instructor-img-box">
              <img src="src/assets/team jop.jpg" alt="Instructor" />
            </div>
            <div className="instructor-info-box">
              <h3>احمد محمد</h3>
              <div className="instructor-meta">
                <span><i className="fa-solid fa-star"></i> 5</span>
                <span>Developer <i className="fa-solid fa-graduation-cap"></i></span>
                <span>+60 <i className="fa-solid fa-clock"></i></span>
              </div>
            </div>
          </div>

     
          <div className="instructor-card">
            <div className="instructor-img-box">
              <img src="src/assets/team jop.jpg" alt="Instructor" />
            </div>
            <div className="instructor-info-box">
              <h3>احمد محمد</h3>
              <div className="instructor-meta">
                <span><i className="fa-solid fa-star"></i> 5</span>
                <span>Developer <i className="fa-solid fa-graduation-cap"></i></span>
                <span>+60 <i className="fa-solid fa-clock"></i></span>
              </div>
            </div>
          </div>
          
        </div>
        
        <div className="slider-dots-line">
          <span></span><span></span><span className="active"></span><span></span><span></span><span></span>
        </div>
      </div>

      <div className="instructors-content">
        <div className="instructors-titles">
          <span>مدربين ايراسوفت</span>
          <h2>تعرف على مدربينا المتفانين اللذين يشكلون مستقبلك!</h2>
        </div>
        <p className="instructors-desc">
          لوريم إيبسوم لوريم إيبسوم لوريم إيبسوم لوريم إيبسوم لوريم إيبسوم لوريم إيبسوم لوريم إيبسوم
        </p>
        
        <Link to="/not-found" className="instructors-btn">عرض الكل</Link>

        <div className="content-grid-dots">
          <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
          <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
        </div>
      </div>
    </section>
  );
}