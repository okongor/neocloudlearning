// components/ProgrammingLanguagesGrid.js
import React from 'react';
import Link from 'next/link';
import styles from './ProgrammingLanguagesGrid.module.css';



const programmingLanguages = [
  { name: 'HTML', href:'/pages/html/htmlintro.mdx'},
  { name: 'CSS', href: '/html/htmlintro.mdx' },
  { name: 'JavaScript', href: '/mdx/Java' },
  { name: 'NodeJs', href: '/mdx/C++' },
  { name: 'Python', href: '/mdx/Ruby' },
  { name: 'Django', href: '/mdx/Go' },
  { name: 'Data Analytics', href: '/mdx/Swift' },
  { name: 'Data Science', href: '/mdx/Kotlin' },
  { name: 'Cyber Security', href: '/mdx/Kotlin' },
  { name: 'Flutter', href: '/mdx/Kotlin' },
  { name: 'ML/ AI', href: '/mdx/Kotlin' },
  { name: 'Cloud Computing', href: '/mdx/Kotlin' }
];

const ProgrammingLanguagesGrid = () => {
  return (
    <div className={styles.grid}>
      {programmingLanguages.map((language, index) => (
        <Link key={index} href={language.href} className={styles.box}>
          {language.name}
        </Link>
      ))}
    </div>
  );
};

export default ProgrammingLanguagesGrid;
