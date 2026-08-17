import React from 'react';
import { Link } from 'react-router-dom';

export default function FeaturedCourses() {
  return (
    <section className="featured-section">
      <div className="featured-header">
        <Link to="/courses" className="featured-view-all-btn">عرض الكل</Link>
        <div className="featured-titles">
          <h2>دورات مقدمة لك من قبل خبراء</h2>
          <span>أشهر الدورات</span>
        </div>
      </div>

      <div className="featured-grid">
         <div className="featured-card">
          <div className="card-badge">
            <img src="src/assets/uiux.png" alt="badge" />
          </div>
          <div className="card-right">
            <h3>كورس UI/UX Design</h3>
            <p>لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويستخدم في صناعات لوريم إيبسوم (Lorem Ipsum) هو</p>
            <div className="card-meta">
              <span>+20 تدريب عملي <i className="fa-solid fa-code"></i></span>
              <span>+60 ساعة <i className="fa-solid fa-clock"></i></span>
            </div>
          </div>
          <div className="card-left">
            <span className="course-price">5000 جنيها</span>
            <Link to="/not-found" className="subscribe-btn">اشترك الان</Link>
          </div>
          <div className="cloud-shape"></div>
        </div>

        
        <div className="featured-card">
          <div className="card-badge">
            <img src="src/assets/uiux.png" alt="badge" />
          </div>
          <div className="card-right">
            <h3>كورس UI/UX Design</h3>
            <p>لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويستخدم في صناعات لوريم إيبسوم (Lorem Ipsum) هو</p>
            <div className="card-meta">
              <span>+20 تدريب عملي <i className="fa-solid fa-code"></i></span>
              <span>+60 ساعة <i className="fa-solid fa-clock"></i></span>
            </div>
          </div>
          <div className="card-left">
            <span className="course-price">5000 جنيها</span>
            <Link to="/not-found" className="subscribe-btn">اشترك الان</Link>
          </div>
          <div className="cloud-shape"></div>
        </div>
      </div>
    </section>
  );
}