import Image from 'next/image';
import dataJson from '../../app/data/data.json';
import RootLayout from 'pages/app/layout';
import { ReactElement } from 'react';
import Link from 'next/link';
import PageLayout from '../layout';

const Product = () => {
  const { data } = dataJson;

  return (
    <PageLayout>
      <div className="container mx-auto p-4">
        <h1 className="mb-24 flex justify-center">Productos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.map((el, index) => (
            <Link key={el.id} href={`/products/${el.id}`} passHref>
              <div key={index} className="flex flex-col items-center md:items-start hover:cursor-pointer">
                <div className="relative bg-black transition duration-300 hover:bg-opacity-70 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-96 overflow-hidden mx-auto md:mx-0">
                  <Image
                    src={el.imgMain}
                    alt={el.title}
                    width={300}
                    height={300}
                    priority
                    className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-70"
                  />
                </div>
                <p className="mt-4 mb-8 text-center md:text-left">{el.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

Product.getLayout = (page: ReactElement) => {
  return <RootLayout>{page}</RootLayout>;
};

export default Product;
