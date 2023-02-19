import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductById } from '../../../database/products';
import styles from './page.module.scss';
import Product from './Product';

export const dynamic = 'force-dynamic';

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
      <h1 className={styles.h1}>{singleProduct.name}</h1>
      <main className={styles.mainContainer}>
        {/* This is a {singleProduct.type} */}
        <br />

        <br />
        {/* product name :{singleProduct.name} */}
        <br />
        <Image
          className={styles.image}
          src={`/images/${singleProduct.name}.jpeg`}
          alt={singleProduct.type}
          width="200"
          height="200"
        />
        <Product product={singleProduct} />
      </main>
    </>
  );
}
