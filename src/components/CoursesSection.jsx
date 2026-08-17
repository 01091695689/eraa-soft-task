import React from 'react';
import { Link } from 'react-router-dom';

export default function CoursesSection() {
  return (
    <section style={{
       padding: '40px 20px',
        maxWidth: '1100px',
         margin: '0 auto', 
         direction: 'rtl' 
         }}>
      <div style={{
         display: 'flex',
          justifyContent: 'space-between',
           alignItems: 'center', 
           marginBottom: '30px'
            }}>
        <Link to="/not-found" style={{ 
          backgroundColor: '#1e3a8a', 
          color: 'white',
           padding: '10px 24px',
            borderRadius: '10px', 
            textDecoration: 'none',
             fontSize: '14px',
              fontWeight: '500' }}>عرض الكل</Link>
        <div style={{ 
          textAlign: 'right',
           display: 'flex', 
           flexDirection: 'column',
            alignItems: 'flex-end'
             }}>
          <h2 style={{ 
            fontSize: '26px',
             fontWeight: 'bold', 
             color: '#111',
              margin: '0 0 6px 0' }}>ابداً التعلم الان</h2>
          <span style={{
             fontSize: '13px', 
             color: '#777' }}>اقسام الدورات</span>
        </div>
      </div>

      <div style={{
         display: 'grid'
         , gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '25px' }}>
        <div style={{
           background: '#ffffff', 
           borderRadius: '16px',
            overflow: 'hidden', 
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)', 
            border: '1px solid #eaeaea', display: 'flex',
             flexDirection: 'column', 
             justifyContent: 'space-between'
              }}>
          <div style={{
             padding: '20px',
              textAlign: 'right'
               }}>
            <h3 style={{
               fontSize: '18px',
                fontWeight: 'bold',
                 color: '#111',
                  marginBottom: '8px' }}>كورسات frontend</h3>
            <p style={{ 
              fontSize: '12px', 
              color: '#666',
               lineHeight: '1.5',
                marginBottom: '15px' }}>لوريم ابيسوم لوريم ابيسوم لوريم ابيسوم لوريم ابيسوم لوريم ابيسوم</p>
            <div style={{
               display: 'flex',
                justifyContent: 'flex-start', 
                alignItems: 'center', gap: '12px',
                 fontSize: '11px', color: '#888'
                  }}>
              <span><i className="fa-solid fa-star"></i> 5</span>
              <span><i className="fa-solid fa-users"></i> 10 محاضرين</span>
              <span><i className="fa-solid fa-clock"></i> +60</span>
            </div>
          </div>
          <div style={
            { width: '100%',
             height: '140px',
              display: 'flex', 
              alignItems: 'center',
               justifyContent: 'center', 
               overflow: 'hidden',
                padding: '10px',
                 backgroundColor: '#7dd3fc'
                  }}>
            <img src="src/assets/f1.png" alt="Frontend Course"
             style={{
               maxWidth: '100%',
                maxHeight: '100%',
                 objectFit: 'contain' 
                 }} />
          </div>
        </div>

        <div style={{ 
          background: '#ffffff',
           borderRadius: '16px',
            overflow: 'hidden',
             boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)',
              border: '1px solid #eaeaea', display: 'flex', 
              flexDirection: 'column',
               justifyContent: 'space-between' 
               }}>
          <div style={{
             padding: '20px',
              textAlign: 'right'
               }}>
            <h3 style={
              { fontSize: '18px', 
              fontWeight: 'bold', 
              color: '#111', 
              marginBottom: '8px' }}>كورسات Backend</h3>
            <p style={{ 
              fontSize: '12px',
               color: '#666',
                lineHeight: '1.5', 
                marginBottom: '15px' }}>لوريم ابيسوم لوريم ابيسوم لوريم ابيسوم لوريم ابيسوم لوريم ابيسوم</p>
            <div style={{ 
              display: 'flex',
               justifyContent: 'flex-start',
                alignItems: 'center',
                 gap: '12px',
                  fontSize: '11px', 
                  color: '#888' }}>
              <span><i className="fa-solid fa-star"></i> 5</span>
              <span><i className="fa-solid fa-users"></i> 10 محاضرين</span>
              <span><i className="fa-solid fa-clock"></i> +60</span>
            </div>
          </div>
          <div style={{
             width: '100%',
              height: '140px',
               display: 'flex',
                alignItems: 'center', 
                justifyContent: 'center',
                 overflow: 'hidden',
                  padding: '10px', 
                  backgroundColor: '#6366f1' 
                  }}>
            <img src="src/assets/f2.png" alt="Backend Course" 
            style={{
               maxWidth: '100%',
                maxHeight: '100%', 
                objectFit: 'contain' 
                }} />
          </div>
        </div>

        <div style={{
           background: '#ffffff',
            borderRadius: '16px', 
            overflow: 'hidden',
             boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)',
              border: '1px solid #eaeaea',
               display: 'flex', 
              flexDirection: 'column',
               justifyContent: 'space-between'
                }}>
          <div style={{ 
            padding: '20px',
             textAlign: 'right'
              }}>
            <h3 style={{
               fontSize: '18px', 
               fontWeight: 'bold', 
               color: '#111',
                marginBottom: '8px' }}>كورسات flutter</h3>
            <p style={{
               fontSize: '12px',
                color: '#666', 
                lineHeight: '1.5', 
                marginBottom: '15px' }}>لوريم ابيسوم لوريم ابيسوم لوريم ابيسوم لوريم ابيسوم لوريم ابيسوم</p>
            <div style={
              { display: 'flex',
               justifyContent: 'flex-start',
                alignItems: 'center',
                 gap: '12px',
                  fontSize: '11px', 
                  color: '#888'
                   }}>
              <span><i className="fa-solid fa-star"></i> 5</span>
              <span><i className="fa-solid fa-users"></i> 10 محاضرين</span>
              <span><i className="fa-solid fa-clock"></i> +60</span>
            </div>
          </div>
          <div style={{
             width: '100%', 
             height: '140px',
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              overflow: 'hidden',
               padding: '10px',
                backgroundColor: '#e11d48' 
                }}>
            <img src="src/assets/f3.png" alt="Flutter Course" 
            style={{
               maxWidth: '100%', 
               maxHeight: '100%', 
               objectFit: 'contain'
                }} />
          </div>
        </div>

        <div style={{
           background: '#ffffff', 
           borderRadius: '16px',
            overflow: 'hidden',
             boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)', 
             border: '1px solid #eaeaea', 
             display: 'flex',
              flexDirection: 'column', 
              justifyContent: 'space-between'
               }}>
          <div style={{ 
            padding: '20px',
             textAlign: 'right'
              }}>
            <h3 style={{
               fontSize: '18px', 
               fontWeight: 'bold',
                color: '#111',
                 marginBottom: '8px' }}>Software Testing</h3>
            <p style={{ 
              fontSize: '12px',
               color: '#666', 
               lineHeight: '1.5',
                marginBottom: '15px' }}>لوريم ابيسوم لوريم ابيسوم لوريم ابيسوم لوريم ابيسوم لوريم ابيسوم</p>
            <div style={{
               display: 'flex', 
               justifyContent: 'flex-start',
                alignItems: 'center',
                 gap: '12px', 
                 fontSize: '11px',
                  color: '#888' 
                  }}>
              <span><i className="fa-solid fa-star"></i> 5</span>
              <span><i className="fa-solid fa-users"></i> 10 محاضرين</span>
              <span><i className="fa-solid fa-clock"></i> +60</span>
            </div>
          </div>
          <div style={{ 
            width: '100%', 
            height: '140px', 
            display: 'flex',
             alignItems: 'center',
              justifyContent: 'center',
               overflow: 'hidden',
                padding: '10px', 
                backgroundColor: '#fde047' 
                }}>
            <img src="src/assets/f4.png" alt="Software Testing" 
            style={{
               maxWidth: '100%',
                maxHeight: '100%',
                 objectFit: 'contain'
                  }} />
          </div>
        </div>

        <div style={{ 
          background: '#ffffff',
           borderRadius: '16px', 
           overflow: 'hidden', 
           boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)',
            border: '1px solid #eaeaea', 
            display: 'flex',
             flexDirection: 'column',
              justifyContent: 'space-between' 
              }}>
          <div style={{
             padding: '20px',
              textAlign: 'right' 
              }}>
            <h3 style={{
               fontSize: '18px',
                fontWeight: 'bold', 
                color: '#111',
                 marginBottom: '8px' }}>كورسات Ai</h3>
            <p style={{ 
              fontSize: '12px', 
              color: '#666',
              lineHeight: '1.5',
               marginBottom: '15px' }}>لوريم ابيسوم لوريم ابيسوم لوريم ابيسوم لوريم ابيسوم لوريم ابيسوم</p>
            <div style={{ 
              display: 'flex',
               justifyContent: 'flex-start', 
               alignItems: 'center',
               gap: '12px', 
               fontSize: '11px',
                color: '#888' 
                }}>
              <span><i className="fa-solid fa-star"></i> 5</span>
              <span><i className="fa-solid fa-users"></i> 10 محاضرين</span>
              <span><i className="fa-solid fa-clock"></i> +60</span>
            </div>
          </div>
          <div style={{
             width: '100%', 
             height: '140px', 
             display: 'flex', 
             alignItems: 'center', 
             justifyContent: 'center',
              overflow: 'hidden',
               padding: '10px',
                backgroundColor: '#2563eb' 
                }}>
            <img src="src/assets/f5.png" alt="AI Course" 
            style={{ 
              maxWidth: '100%',
               maxHeight: '100%',
                objectFit: 'contain'
                 }} />
          </div>
        </div>

        <div style={{
           background: '#ffffff',
            borderRadius: '16px',
             overflow: 'hidden', 
             boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)',
              border: '1px solid #eaeaea',
               display: 'flex',
                flexDirection: 'column', 
                justifyContent: 'space-between'
                 }}>
          <div style={{
             padding: '20px',
              textAlign: 'right' 
              }}>
            <h3 style={{ 
              fontSize: '18px',
               fontWeight: 'bold',
                color: '#111', 
                marginBottom: '8px' }}>كورسات التصميم</h3>
            <p style={{
               fontSize: '12px',
                color: '#666',
                 lineHeight: '1.5',
                  marginBottom: '15px' }}>لوريم ابيسوم لوريم ابيسوم لوريم ابيسوم لوريم ابيسوم لوريم ابيسوم</p>
            <div style={{ 
              display: 'flex',
               justifyContent: 'flex-start',
                alignItems: 'center',
                 gap: '12px',
                  fontSize: '11px',
                  color: '#888'
                   }}>
              <span><i className="fa-solid fa-star"></i> 5</span>
              <span><i className="fa-solid fa-users"></i> 10 محاضرين</span>
              <span><i className="fa-solid fa-clock"></i> +60</span>
            </div>
          </div>
          <div style={{
             width: '100%',
              height: '140px', 
              display: 'flex',
               alignItems: 'center',
                justifyContent: 'center',
                 overflow: 'hidden',
                  padding: '10px',
                   backgroundColor: '#fb923c'
                    }}>
            <img src="src/assets/f6.png" alt="Design Course" 
            style={{
               maxWidth: '100%', 
               maxHeight: '100%', 
               objectFit: 'contain' }} />
          </div>
        </div>
      </div>
    </section>
  );
}