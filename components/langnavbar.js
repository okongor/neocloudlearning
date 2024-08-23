import React, { useRef } from 'react';
import Link from 'next/link';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from './langnavbar.module.css';

const languages = [
  { name: 'HTML', path: '/html/htmlintro' },
  { name: 'CSS', path: '/css/cssintro' },
  { name: 'JavaScript', path: '/javascript/javascript' },
  { name: 'React', path: '/react/reactintro' },
  { name: 'NodeJs', path: '/Nodejs/nodejs' },
  { name: 'TypeScript', path: '/languages/typescript' },
  { name: 'Express', path: '/express/expressintro' },
  { name: 'MongoDB', path: '/MongoDB/mongodbintro' },
  { name: 'PHP', path: '/languages/php' },
  { name: 'Python', path: '/python/home' },
  { name: 'Cybersecurity', path: '/cybersecurity/intro' },
  { name: 'GoLang', path: '/languages/ruby' },
  { name: 'Flutter', path: '/flutter/intro' },
  { name: 'Data Analytics', path: '/dataanalytics/intro' },
  { name: 'Data Science', path: '/Datascience/intro' },
  { name: 'Digital Marketing', path: '/languages/ruby' },
  { name: 'Cloud Computing', path: '/languages/go' },
  { name: 'Graphics Design', path: '/graphicdesign/intro' },
  { name: 'Swift', path: '/languages/swift' },
  { name: 'UI/UX Design', path: '/ui/ux/intro' },
  { name: 'Swift', path: '/languages/swift' },
  { name: 'Kotlin', path: '/languages/kotlin' },
  { name: 'Rust', path: '/languages/rust' },
  { name: 'Scala', path: '/languages/scala' },
  { name: 'Perl', path: '/languages/perl' },
 
];

const Navbar = () => {
  const navRef = useRef(null);

  const scrollLeft = () => {
    if (navRef.current) {
        console.log('Scrolling left');
        navRef.current.scrollBy({ left: -200, behavior: 'smooth' });
      }
    
  };

  const scrollRight = () => {
    if (navRef.current) {
        console.log('Scrolling right');
        navRef.current.scrollBy({ left: 200, behavior: 'smooth' });
      }
  
  };

  return (
    <div className={styles.navbarContainer}>
      <button className={styles.arrow} onClick={scrollLeft}>
        <FaChevronLeft />
      </button>
      <div className={styles.navbar} ref={navRef}>
        {languages.map((language, index) => (
          <Link key={index} href={language.path}>
            <div className={styles.navItem}>
              {language.name}
            </div>
          </Link>
        ))}
      </div>
      <button className={styles.arrow} onClick={scrollRight}>
        <FaChevronRight />
      </button>
      
    </div>
  );
};

export default Navbar;
