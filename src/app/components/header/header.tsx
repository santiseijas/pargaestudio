import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full text-black py-4 shadow-md bg-white z-10">
      <div className="container mx-auto flex items-center justify-between px-4">
        <h1 className="font-bold text-center absolute left-1/2 transform -translate-x-1/2">
          <Link href="/">PARGAESTUDIO</Link>
        </h1>

        <nav className="ml-auto flex space-x-4">
          <Link href="/products" className="hover:underline">
            Products
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
