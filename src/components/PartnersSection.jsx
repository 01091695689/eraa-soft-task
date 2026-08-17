import React from 'react';

export default function PartnersSection() {
  const partnersData = [
    { id: 1,
         name: 'The Box',
          imgSrc: 'src/assets/1.png' 
        },
    { id: 2,
         name: 'Active4Web'
         , imgSrc: 'src/assets/2.png'
         },
    { id: 3, 
        name: 'Gateway',
         imgSrc: 'src/assets/3.png' 
        },
    { id: 4, 
        name: 'Mega Trust',
         imgSrc: 'src/assets/4.png'
         },
    { id: 5, 
        name: 'AFK', 
        imgSrc: 'src/assets/5.png' 
    },
    { id: 6,
         name: 'Orange Digital Center',
          imgSrc: 'src/assets/6.png'
         },
    { id: 7,
         name: 'Al-Borj Labs',
          imgSrc: 'src/assets/7.png'
         },
  ];

  return (
    <section className="landing-unique-partners-wrapper">
      <div className="landing-unique-partners-container">
        
        <div className="landing-unique-partners-header">
          <span className="landing-unique-partners-subtitle">شركاؤنا</span>
          <h2>شركاء النجاح</h2>
        </div>

        <div className="landing-unique-partners-grid">
          {partnersData.map((partner) => (
            <div key={partner.id} className="landing-unique-partner-logo">
              <img src={partner.imgSrc} alt={partner.name} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}