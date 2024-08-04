
import React from 'react';
import Link from 'next/link';

const MdxButton = ({ href, children }) => {
  return (
    <Link href={href} legacyBehavior>
      <a
        style={{
          display: 'block',
          width: '100%',
          backgroundColor: 'rgb(5, 5, 94)',
          color: 'white',
          padding: '20px',
          textAlign: 'center',
          textDecoration: 'none',
          borderRadius: '9px',
          fontSize:'25px'
        }}
      >
        {children}
      </a>
    </Link>
  );
};

export default MdxButton;
