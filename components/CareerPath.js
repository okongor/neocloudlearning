// components/CareerPath.js
import React from 'react';
import styles from './CareerPath.module.css';
import MdxButton from './roadmapbuutton';

const steps = [
  { title: 'Learn HTML & CSS', description: 'Start with the basics of web development.' },
  { title: 'Learn JavaScript', description: 'Understand the fundamentals of JavaScript.' },
  { title: 'Learn a Framework', description: 'Choose a framework like Reac.' },
  { title: 'Build Projects', description: 'Create projects to apply your knowledge.' },
  { title: 'Learn Backend', description: 'Understand backend technologies like Node.js and express.' },
  { title: 'Deploy Applications', description: 'Learn how to deploy your applications.' },
];

const CareerPath = () => {
  return (
    <div className={styles.container}>
      {steps.map((step, index) => (
        <div key={index} className={styles.step}>
          <h2>{step.title}</h2>
          <p>{step.description}</p>
        </div>
      ))}

      <MdxButton href="/html/htmlintro" >Get Started</MdxButton>
    </div>
  );
};

export default CareerPath;
