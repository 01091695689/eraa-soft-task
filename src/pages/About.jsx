import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function About() {
  const [showAllTeam, setShowAllTeam] = useState(false);

  const teamMembers = [
    { id: 1, 
      name: 'أحمد محمد',
       role: 'Developer', 
       image: 'src/assets/team jop.jpg' 
      },
    { id: 2,
       name: 'أحمد محمد', 
       role: 'Developer', 
       image: 'src/assets/team jop.jpg' 
      },
    { id: 3,
       name: 'أحمد محمد', 
       role: 'Developer',
        image: 'src/assets/team jop.jpg'
       },
    { id: 4, 
      name: 'أحمد محمد',
       role: 'Developer',
        image: 'src/assets/team jop.jpg'
       },
    { id: 5,
       name: 'أحمد محمد', 
       role: 'Developer',
        image: 'src/assets/team jop.jpg'
       },
    { id: 6,
       name: 'أحمد محمد', 
       role: 'Developer', 
       image: 'src/assets/team jop.jpg'
       },
  ];
  const displayedTeam = showAllTeam ? teamMembers : teamMembers.slice(0, 4);

  return (
    <div className="about-page">
      
      
      <section className="about-hero-section">
        <div className="about-container">
          <div className="about-top-row">
            <div className="about-image-col">
              <div className="image-placeholder">
                <img src="src/assets/about.jpg" alt="About Us" />
              </div>
            </div>

            <div className="about-text-col">
              <h2 className="about-section-title">من نحن؟</h2>
              <p className="about-large-desc">
               لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في.
لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار
لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف.
              </p>
            </div>
          </div>

          <div className="about-bottom-row">
            <p className="about-full-desc">
            لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في.
لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار
لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف.
            </p>
          </div>
        </div>
      </section>

<section className="goals-section">
  <div className="about-container">
    <div className="goals-header text-center">
      <span className="goals-subtitle">أهدافنــا</span>
      <h2 className="about-section-title">بنساعدك نوصل لحلمك</h2>
    </div>

    <div className="goals-grid">
      <div className="goal-card">
        <div className="goal-icon-box">
          <img src="src/assets/Group 1.png" alt="Goal 1" />
        </div>
        <h5 className="goal-title">خلق سوق تنافسي قوي و مستدام في مجال صناعة البرمجيات</h5>
      </div>

      <div className="goal-card">
        <div className="goal-icon-box">
          <img src="src/assets/Group 2.png" alt="Goal 2" />
        </div>
        <h5 className="goal-title">المساهمة العلمية في مجال صناعة البرمجيات بالكوادر عربية</h5>
      </div>

      <div className="goal-card">
        <div className="goal-icon-box">
          <img src="src/assets/Group 3.png" alt="Goal 3" />
        </div>
        <h5 className="goal-title">الوصول الي تدريب 500 الف برمچ عربي بحلول عام 2030</h5>
      </div>

      <div className="goal-card">
        <div className="goal-icon-box">
          <img src="src/assets/Group 4.png" alt="Goal 4" />
        </div>
        <h5 className="goal-title">تخريج 5000 مدرب معتمد في المجالات الرقمية المختلفة</h5>
      </div>
    </div>
  </div>
</section>
     <section className="team-section">
        <div className="about-container">
          <div className="team-header-flex">
            <h2 className="about-section-title">فريق عمل إيراسوفت</h2>
            <button 
              className="show-all-btn" 
              onClick={() => setShowAllTeam(!showAllTeam)}
            >
              {showAllTeam ? 'عرض اقل' : 'عرض الكل'}
            </button>
          </div>
          
          <div className="team-grid">
            {displayedTeam.map((member) => (
              <div className="team-card" key={member.id}>
                <div className="team-img-placeholder">
                  <img src={member.image} alt={member.name} />
                </div>
                <h3 className="team-member-name">{member.name}</h3>
                
                {/* التفاصيل الجديدة تحت الاسم مباشرة بالترتيب المطلوب */}
                <div className="team-member-info" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', flexWrap: 'wrap', marginTop: '6px', fontSize: '0.85rem', color: '#64748b' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                  5  <i className="fa-solid fa-star" style={{ color: '#f59e0b' }}></i> 
                  </span>
                  <span></span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                    <i className="fa-solid fa-graduation-cap" style={{ color: '#1e3a8a' }}></i> {member.role}
                  </span>
                  <span>-</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                    <i className="fa-solid fa-clock" style={{ color: '#1e3a8a' }}></i>
                       <span>60 ساعة</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    
      <section className="partners-section">
        <div className="about-container">
          <div className="partners-header text-center">
            <span className="partners-subtitle">شركانــا</span>
            <h2 className="partners-title">شركاء النجاح</h2>
          </div>
          
          <div className="partners-icons-wrapper">
            <div className="partner-card">
              <img src="src/assets/1.png" alt="Partner 1" />
            </div>
            <div className="partner-card">
              <img src="src/assets/2.png" alt="Partner 2" />
            </div>
            <div className="partner-card">
              <img src="src/assets/3.png" alt="Partner 3" />
            </div>
            <div className="partner-card">
              <img src="src/assets/4.png" alt="Partner 4" />
            </div>
            <div className="partner-card">
              <img src="src/assets/5.png" alt="Partner 5" />
            </div>
            <div className="partner-card">
              <img src="src/assets/6.png" alt="Partner 6" />
            </div>
            <div className="partner-card">
              <img src="src/assets/7.png" alt="Partner 7" />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default About;