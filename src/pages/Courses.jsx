import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CoursesPage() {
  const navigate = useNavigate();

  const coursesData = [
    {
      id: 1,
      title: 'كورس UI/UX Design',
      description: 'لوريم إيبسوم لوريم إيبسوم لوريم إيبسوم لوريم إيبسوم لوريم إيبسوم لوريم إيبسوم لوريم إيبسوم',
      hours: '60 ساعة',
      practical: '20 تدريب عملي',
      price: '5000 جنية',
      imgSrc: 'src/assets/uiux.png'
    },
    {
      id: 2,
      title: 'كورس UI/UX Design',
      description: 'لوريم إيبسوم لوريم إيبسوم لوريم إيبسوم لوريم إيبسوم لوريم إيبسوم لوريم إيبسوم لوريم إيبسوم',
      hours: '60 ساعة',
      practical: '20 تدريب عملي',
      price: '5000 جنية',
      imgSrc: 'src/assets/uiux.png' 
    },
    {
      id: 3,
      title: 'كورس UI/UX Design',
      description: 'لوريم إيبسوم لوريم إيبسوم لوريم إيبسوم لوريم إيبسوم لوريم إيبسوم لوريم إيبسوم لوريم إيبسوم',
      hours: '60 ساعة',
      practical: '20 تدريب عملي',
      price: '5000 جنية',
      imgSrc: 'src/assets/uiux.png'
    },
    {
      id: 4,
      title: 'كورس UI/UX Design',
      description: 'لوريم إيبسوم لوريم إيبسوم لوريم إيبسوم لوريم إيبسوم لوريم إيبسوم لوريم إيبسوم لوريم إيبسوم',
      hours: '60 ساعة',
      practical: '20 تدريب عملي',
      price: '5000 جنية',
      imgSrc: 'src/assets/uiux.png'
    },
    {
      id: 5,
      title: 'كورس UI/UX Design',
      description: 'لوريم إيبسوم لوريم إيبسوم لوريم إيبسوم لوريم إيبسوم لوريم إيبسوم لوريم إيبسوم لوريم إيبسوم',
      hours: '60 ساعة',
      practical: '20 تدريب عملي',
      price: '5000 جنية',
      imgSrc: 'src/assets/uiux.png'
    },
    {
      id: 6,
      title: 'كورس UI/UX Design',
      description: 'لوريم إيبسوم لوريم إيبسوم لوريم إيبسوم لوريم إيبسوم لوريم إيبسوم لوريم إيبسوم لوريم إيبسوم',
      hours: '60 ساعة',
      practical: '20 تدريب عملي',
      price: '5000 جنية',
      imgSrc: 'src/assets/uiux.png'
    },
    {
      id: 7,
      title: 'كورس UI/UX Design',
      description: 'لوريم إيبسوم لوريم إيبسوم لوريم إيبسوم لوريم إيبسوم لوريم إيبسوم لوريم إيبسوم لوريم إيبسوم',
      hours: '60 ساعة',
      practical: '20 تدريب عملي',
      price: '5000 جنية',
      imgSrc: 'src/assets/uiux.png'
    },
    {
      id: 8,
      title: 'كورس UI/UX Design',
      description: 'لوريم إيبسوم لوريم إيبسوم لوريم إيبسوم لوريم إيبسوم لوريم إيبسوم لوريم إيبسوم لوريم إيبسوم',
      hours: '60 ساعة',
      practical: '20 تدريب عملي',
      price: '5000 جنية',
      imgSrc: 'src/assets/uiux.png'
    }
  ];

  return (
    <div className="courses-page">
      
      {/* الهيدر والفلتر */}
      <div className="courses-header">
        <div className="courses-subtitle-wrapper">
          <span className="courses-subtitle-line"></span>
          <span className="courses-subtitle-text">دورات اليامسوفت</span>
        </div>
        <h1 className="courses-title">دورات مقدمة لك من قبل خبراء</h1>

        <div className="courses-filter-bar">
          <div className="search-box">
            <input type="text" placeholder="بحث..." className="search-input" />
            <i className="fa-solid fa-microphone mic-icon"></i>
            <button className="search-btn"><i className="fa-solid fa-magnifying-glass"></i></button>
          </div>
          <button className="categories-btn">
            <i className="fa-solid fa-sliders"></i> الاقسام
          </button>
        </div>
      </div>

      {/* شبكة الكروت */}
      <div className="courses-grid">
        {coursesData.map((course) => (
          <div key={course.id} className="course-card">
            
            <div className="course-top-frame">
              <img src={course.imgSrc} alt={course.title} />
            </div>

            <div className="course-content">
              <h3 className="course-card-title">{course.title}</h3>
              <p className="course-desc">{course.description}</p>
              
              <div className="course-info">
                <span><i className="fa-solid fa-clock"></i> {course.hours}</span>
                <span><i className="fa-solid fa-laptop-code"></i> {course.practical}</span>
              </div>

              <div className="course-footer">
                <span className="price">{course.price}</span>
                <button className="enroll-btn" onClick={() => navigate('/404')}>اشترك الآن</button>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}