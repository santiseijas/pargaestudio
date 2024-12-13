import React, { ReactElement } from 'react';
import PageLayout from '../layout';
import RootLayout from 'pages/app/layout';

const ContactPage = () => {
  return (
    <PageLayout>
      <h1>Contact Page</h1>
    </PageLayout>
  );
};

ContactPage.getLayout = (page: ReactElement) => {
  return <RootLayout>{page}</RootLayout>;
};
export default ContactPage;
