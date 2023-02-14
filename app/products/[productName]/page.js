import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductById } from '../../../database/products';
import { productNotFoundMetadata } from './not-found';

export const dynamic = 'force-dynamic';

export async function generateMetadata(props: Props) {
  const singleProduct = await getProductById(parseInt(props.params.productId));

  if (!singleProduct) {
    return productNotFoundMetadata;
  }

  return {
    title: singleProduct.name,
    description: `Single product page for ${singleProduct.name}`,
  };
}

type Props = {
  params: {
    productId: string,
  },
};

export default async function AnimalPage(props: Props) {
  const singleProduct = await getProductById(parseInt(props.params.productId));

  if (!singleProduct) {
    notFound();
  }

  return (
    <>
      <h1>{singleProduct.name}</h1>
      <main>
        This product is a {singleProduct.type}
        <br />
        <Image
          src={`/images/${singleProduct.name}-${singleProduct.id}.jpg`}
          alt={singleProduct.type}
          width="200"
          height="200"
        />
      </main>
    </>
  );
}
