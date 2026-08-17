import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutSection() {
  return (
    <section className="landing-unique-about-wrapper">
      <div className="landing-unique-about-container">
        
       
        <div className="landing-unique-text-content">
          <span className="landing-unique-tag">عن ايراسوفت</span>
          <h2>لوريم ايبسوم لوريم ايبسوم</h2>
          <p>
         لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في.
لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار
لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف.
          </p>
          
          <Link to="/about" className="landing-unique-cta-btn">
            المزيد عننا
          </Link>
        </div>
     
        <div className="landing-unique-image-placeholder">
          <img src="src/assets/about.jpg" alt="About Eraasoft" />
        </div>

      </div>
    </section>
  );
}