import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faRocket, 
  faCalendarDays, 
  faEnvelope, 
  faPlay, 
  faTag, 
  faCircleCheck, 
  faLaptopCode, 
  faUserGraduate 
} from '@fortawesome/free-solid-svg-icons';

export default function HeroSection() {
  return (
    <div className="hero-page-wrapper">
      
      {/* السكشن الرئيسي */}
      <div className="hero-main-container">
        
        {/* الجزء الأيمن: النصوص */}
        <div className="hero-text-content">
          <h1>
            تعلم البرمجة الان <FontAwesomeIcon icon={faRocket} className="rocket-icon" />
            <br />
            لضمان مستقبل افضل
          </h1>
          <p>بنسأعدك توصل لحلمك</p>
          <Link to="/" className="hero-btn">سجل الان</Link>
        </div>

        {/* الجزء الأيسر: الصورة والخلفية والكروت العائمة */}
        <div className="hero-image-box">
          <div className="purple-bg-arch"></div>
          <img src="src/assets/hero.png" alt="Hero" className="person-img" />

          {/* الكروت العائمة */}
          <div className="float-card card-1">
            <div className="icon-wrap blue"><FontAwesomeIcon icon={faCalendarDays} /></div>
            <div>
              <strong>+3,000</strong>
              <p>أكثر من 3,000 متدرب</p>
            </div>
          </div>

          <div className="float-card card-2">
            <div className="icon-wrap orange"><FontAwesomeIcon icon={faEnvelope} /></div>
            <div>
              <strong>مبروووك!</strong>
              <p>لقد اكملت الامتحان بنجاح</p>
            </div>
          </div>

          <div className="float-card card-3">
            <div className="icon-wrap pink"><FontAwesomeIcon icon={faPlay} /></div>
            <div>
              <strong>كورس backend.net</strong>
              <p>اليوم 12:00 مساءا</p>
            </div>
          </div>
        </div>

      </div>

      {/* الأربع كروت السفلية جنب بعض */}
      <div className="features-row">
        <div className="feature-item">
          <div className="feat-icon"><FontAwesomeIcon icon={faTag} /></div>
          <h3>اسعار تنافسية</h3>
          <p>اسعار تنافسيه و خصومات مستمرة تصل الى 50%</p>
        </div>

        <div className="feature-item">
          <div className="feat-icon"><FontAwesomeIcon icon={faCircleCheck} /></div>
          <h3>متابعة مستمرة</h3>
          <p>متابعة مستمرة للمتدرب و تأهيله لسوق العمل</p>
        </div>

        <div className="feature-item">
          <div className="feat-icon"><FontAwesomeIcon icon={faLaptopCode} /></div>
          <h3>منهج متكامل</h3>
          <p>مناهج تعليمية متكاملة لضمان تفوق طلابنا</p>
        </div>

        <div className="feature-item">
          <div className="feat-icon"><FontAwesomeIcon icon={faUserGraduate} /></div>
          <h3>افضل مدربين</h3>
          <p>نخبة من افضل المدربين في مختلف المجالات</p>
        </div>
      </div>

    </div>
  );
}