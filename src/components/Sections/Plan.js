import React from 'react';
import { timelineData } from '../../data/timeline';
import '../../styles/Sections/Plan.css';

const Plan = () => {
  return (
    <section id="plan">
      <h2>Plan Dnia</h2>
      <div className="timeline-container">
        {timelineData.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-content">
              <h3>{item.time} - {item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Plan;