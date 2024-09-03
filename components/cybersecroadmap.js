import React from 'react';
import styles from './careerpath/CareerPath.module.css';
import MdxButton from './roadmapbuutton';

  const steps = [
    { title: ' Understand the Basics', description: 'Learn about basic cybersecurity concepts and terminologies.' },
    { title: ' Network Security', description: 'Understand how to secure networks and prevent unauthorized access.' },
    { title: ' Application Security', description: 'Learn about securing web applications and preventing common vulnerabilities.' },
    { title: ' Incident Response', description: 'Know how to respond to and manage cybersecurity incidents.' },
    { title: ' Continuous Learning', description: 'Stay updated with the latest trends and technologies in cybersecurity.' },
  ];

  const Roadmap = () => {
  return (
    <div className={styles.container}>
      {steps.map((step, index) => (
        <div key={index} className={styles.step}>
          <h2>{step.title}</h2>
          <p>{step.description}</p>
        </div>
      ))}
      <MdxButton href="/cybersecurity/intro" >Get Started</MdxButton>
    </div>
        
  );
};

export default Roadmap;
