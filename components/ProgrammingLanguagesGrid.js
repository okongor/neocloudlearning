// components/ProgrammingLanguagesGrid.js
import React from 'react';
import Link from 'next/link';
import styles from './ProgrammingLanguagesGrid.module.css';

const programmingLanguages = [
  { name: ' HTML', href: '/html/htmlintro' },
  { name: 'CSS', href: '/css/cssintro' },
  { name: 'JavaScript', href: '/javascript/javascript' },
  { name: 'React', href: '/react/reactintro' },
  { name: 'NodeJs', href: '/Nodejs/nodejs' },
  { name: 'Express', href: '/express/expressintro' },
  { name: 'MongoDB', href: '/MongoDB/mongodbintro' },
  { name: 'Python', href: '/python/home' },
  { name: 'CyberSecurity', href: '/cybersecurity/intro' },
  { name: 'Flutter', href: '/flutter/intro' },
  { name: 'Data Analytics', href: '/dataanalytics/intro' },
  { name: 'Data Science', href: '/Datascience/intro' },
  { name: 'Digital Marketing', href: '/Digitalmarketing/intro' },
  { name: 'Graphics Design', href: '/graphicdesign/intro' },
  { name: 'UI/UX Design', href: '/ui/ux/intro' },
];

const ProgrammingLanguagesGrid = () => {
  return (
    <div className='all'>
    
    <div className={styles.grid}>
    
      {programmingLanguages.map((language, index) => (
        <Link key={index} href={language.href} legacyBehavior>
          <a className={styles.box}>
            {language.name}
          </a>
        </Link>
      ))}
    </div>
    </div>
  );
};

export default ProgrammingLanguagesGrid;
