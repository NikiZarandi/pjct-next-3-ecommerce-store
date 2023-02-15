import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductById, Product } from '../../../database/products';
// 'use client';
// import { getParsedCookie, setStringifiedCookie } from '../../../utils/cookies';
// import { productNotFoundMetadata } from './not-found';
// export const dynamic = 'force-dynamic';
import IndexPage from './product';
import product from './product';

type Props = {
  product: any;
  params: {
    productId: string;
    name: string;
    price: number;
    type: string;
  };
};

export default async function ProductPage(props: Props) {
  console.log('lets see the type', props.params.productId);
  const singleProduct = await getProductById(parseInt(props.params.productId));
  // console.log('seeeeee', singleProduct);

  if (!singleProduct) {
    // throw new Error('this action is not allowed with Error id: 213123123');
    notFound();
  }

  return (
    <>
      <h1>{singleProduct.name}</h1>
      <main>
        This is a {singleProduct.type}
        <br />
        The price is : {singleProduct.price}
        <br />
        product name :{singleProduct.name}
        <br />
        <Image
          src={`/images/${singleProduct.name}.jpeg`}
          alt={singleProduct.type}
          width="200"
          height="200"
        />
      </main>
    </>
  );
}
