// components/ProgrammingLanguagesGrid.js
import React from 'react';
import Link from 'next/link';
import styles from './ProgrammingLanguagesGrid.module.css';
import { Fade } from 'react-awesome-reveal';
const programmingLanguages = [
  { title: ' HTML', description: 'this is for now', img: '/p1.png', href: '/html/htmlintro' },
  { title: 'CSS', description: 'this is for now', img: '/p1.png', href: '/css/cssintro' },
  { title: 'JavaScript', description: 'this is for now', img: '/p1.png', href: '/javascript/javascript' },
  { title: 'React', description: 'this is for now', img: '/p1.png', href: '/react/reactintro' },
  { title: 'NodeJs', description: 'this is for now', img: '/p1.png', href: '/Nodejs/nodejs' },
  { title: 'Express', description: 'this is for now', img: '/p1.png', href: '/express/expressintro' },
  { title: 'MongoDB',description: 'this is for now', img: '/p1.png',  href: '/MongoDB/mongodbintro' },
  { title: 'Python', description: 'this is for now', img: '/p1.png', href: '/python/home' },
  { title: 'Cybersecurity',description: 'this is for now', img: '/p1.png',  href: '/cybersecurity/intro' },
  { title: 'Flutter', description: 'this is for now', img: '/p1.png', href: '/flutter/intro' },
  { title: 'Data Analytics',description: 'this is for now', img: '/p1.png',  href: '/dataanalytics/intro' },
  {title: 'Data Science',description: 'this is for now', img: '/p1.png',  href: '/Datascience/intro' },
  { title: 'Digital Marketing', description: 'this is for now', img: '/p1.png', href: '/Digitalmarketing/intro' },
  { title: 'Graphics Design',description: 'this is for now', img: '/p1.png',  href: '/graphicdesign/intro' },
  { title: 'UI/UX Design', description: 'this is for now', img: '/p1.png', href: '/ui/ux/intro' },
];

const ProgrammingLanguagesGrid = () => {
  return (
    <div className='all'>
<Fade>
    <div className={styles.grid}>
    
      {programmingLanguages.map((language, index) => (
        <Link key={index} href={language.href} legacyBehavior>
          <a className={styles.box}>
            {language.name}
          </a>
        </Link>
      ))}
    </div>
    </Fade>
    </div>
  );
};

export default ProgrammingLanguagesGrid;
