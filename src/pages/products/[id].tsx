// pages/products/[id].tsx
import Image from 'next/image';
import { GetStaticPaths, GetStaticProps } from 'next';
import dataJson from '../../app/data/data.json';
import PageLayout from '../layout';
import { ParsedUrlQuery } from 'querystring';
import { ReactElement } from 'react';
import RootLayout from 'pages/app/layout';

interface ProductProps {
  product: {
    id: number;
    title: string;
    description: string;
    imgMain: string;
    img: string[];
  };
}

const ProductDetail = ({ product }: ProductProps) => {
  console.log('entraaaa');
  return (
    <PageLayout>
      <div className="container mx-auto p-4 flex flex-col md:flex-row items-start">
        <div className="w-full md:w-1/2 p-4 flex justify-center md:justify-end overflow-y-scroll h-screen md:h-auto">
          <div className="space-y-4">
            <div className="relative w-full max-w-md h-64">
              <Image src={product.imgMain} alt={product.title} width={500} height={500} className="object-cover " />
            </div>
            {product.img.map((img, index) => (
              <div key={index} className="relative w-full max-w-md h-64">
                <Image
                  src={img}
                  alt={`${product.title} - Image ${index + 1}`}
                  width={500}
                  height={500}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/2 p-4 flex flex-col items-center md:items-start text-center md:text-left md:sticky top-8 md:top-8">
          <div className="flex flex-col justify-start md:justify-center h-full md:min-h-screen mt-8 md:mt-0">
            <h1 className="text-3xl font-semibold mb-4">{product.title}</h1>
            <p className="text-lg mb-6 leading-relaxed text-gray-600">{product.description}</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = dataJson.data.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const params = context.params as ParsedUrlQuery;

  if (!params || !params.id) {
    return {
      notFound: true,
    };
  }

  const product = dataJson.data.find((item) => item.id.toString() === params.id);

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
    },
  };
};

ProductDetail.getLayout = (page: ReactElement) => {
  return <RootLayout>{page}</RootLayout>;
};
export default ProductDetail;
