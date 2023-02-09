import dynamic from 'next/dynamic';
import Image from 'next/image';
import { products } from '../../../database/products';

// const products = [
//   { id: 4, name: 'galin', type: 'jpeg' },
//   { id: 5, name: 'tira', type: 'jpeg' },
//   { id: 6, name: 'mina', type: 'jpeg' },
//   { id: 7, name: 'maya', type: 'jpeg' },
// ];

export const dynamic = 'forde-dynamic';

export async function generateMetadata(props) {
  const singleProduct = await getproduct(params, productId);

  return {
    title: `Single product page for ${singleProduct.name}
    `,
    description: '',
  };
}

export default async function ProductPage(params) {
  const singleProduct = products.find((product) => {
    return product.name.toLowerCase() === props.params.productName;
  });
  // console.log(singleProduct);

  // return (
  //   // <h2>{singleProduct.name}</h2>
  //   <Image
  //     src={`/images/${singleProduct.name}-${singleProduct.id}.jpeg`}
  //     alt={singleProduct.type}
  //     width="200"
  //     height="200"
  //   />
  // );
}
