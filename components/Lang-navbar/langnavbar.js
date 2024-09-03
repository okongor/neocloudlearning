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
  { name: 'MongoDB', path: '/MongoDB/mongodbintro' },
  { name: 'PHP', path: '/languages/php' },
  { name: 'Python', path: '/python/home' },
  { name: 'Cybersecurity', path: '/cybersecurity/intro' },
  { name: 'Flutter', path: '/flutter/intro' },
  { name: 'Pandas', path: '/Datascience/intro' },
  { name: 'Digital Marketing', path: '/languages/ruby' },
  { name: 'Cloud Computing', path: '/languages/go' },
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
