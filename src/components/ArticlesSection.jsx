import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function ArticlesSection() {
  const navigate = useNavigate();

  const handleViewAllClick = () => {
    navigate('/error');
  };

  const articlesData = [1, 2, 3];

  return (
    <section className="articles-section">
      <div className="articles-header">
        <button className="view-all-btn" onClick={handleViewAllClick}>
          عرض الكل
        </button>
        
        <div className="articles-title-group">
          <span className="articles-subtitle">المقالات</span>
          <h2 className="articles-main-title">مقالات إيراسوفت</h2>
        </div>
      </div>

      <div className="articles-grid">
        {articlesData.map((_, index) => (
          <div className="article-card" key={index}>
            <div className="article-img-box">
              <img src="src/assets/artical.jpg" alt="Article" />
            </div>

            <div className="article-content">
              <h3 className="article-title">عنوان المقال</h3>
              <p className="article-desc">
                لوريم إيبسوم لوريم إيبسوم لوريم إيبسوم لوريم إيبسوم لوريم إيبسوم لوريم إيبسوم لوريم إيب...
              </p>

              <div className="article-meta-info">
                <span className="date-time">08/10/2024 12:30 PM</span>
                <span className="read-time">
                  30 دقيقة <i className="fa-regular fa-clock"></i>
                </span>
              </div>

              <hr className="article-divider" />

              <div className="article-footer">
                <a href="#read-more" className="read-more-link">
                  اقرأ المزيد <i className="fa-solid fa-chevron-left"></i>
                </a>

                <div className="author-info">
                  <span className="author-name">محمد احمد</span>
                  <div className="author-img">
                    <img src="src/assets/artical.jpg" alt="Author" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}