
import React from 'react';
import Link from 'next/link';

const BegButton = ({ href, children }) => {
  return (
    <Link href={href} legacyBehavior>
      <a
        style={{
          display: 'block',
          color: 'gray',
          padding: '10px',
          textAlign: 'center',
          textDecoration: 'none',
          borderRadius: '9px',
          fontSize:'20px',
          fontWeight:200,
          width:1000,
        }}
      >
        {children}
      </a>
    </Link>
  );
};

export default BegButton;
