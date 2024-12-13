import React from 'react';
import Header from '../app/components/header/header';
import Footer from '../app/components/footer/footer';

const PageLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-16">{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
