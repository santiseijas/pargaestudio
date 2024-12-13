import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full text-center py-4">
      <p>&copy; {new Date().getFullYear()} My Site. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
