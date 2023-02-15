import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/products';
import styles from './page.module.scss';

// export const dynamic = 'force-dynamic';

// eslint-disable-next-line no-redeclare

// const Products = [
//   { id: 4, name: 'galin', type: 'ring' },
//   { id: 5, name: 'tira', type: 'ring' },
//   { id: 6, name: 'mina', type: 'ring' },
//   { id: 7, name: 'maya', type: 'ring' },
// ];

// export default function ProductsPage () {
//   const productsCookie = cookies().get('cookies');
// }

// let productsCookieParsed = [];

// if (productsCookie) {
//   productsCookieParsed = JSON.parse(productsCookie.value);
// }

export const metadata = {
  title: 'Products',
  description: 'This is my Products page',
};

export default async function ProductsPage() {
  const products = await getProducts();
  return (
    <div className={styles.mainHolder}>
      {/* <h1 className={styles.h1}>Products</h1> */}

      <main className={styles.mainContainer}>
        {products.map((product) => {
          console.log(products);
          return (
            <div key={product.id} data-test-id={`product-type-${product.type}`}>
              <Link href={`/products/${product.id}`}>
                <h2 className={styles.h2}>{product.name}</h2>
              </Link>
              <Link href={`/products/${product.id}`}>
                <Image
                  src={`/images/${product.name}.jpeg`}
                  alt={product.type}
                  width="200"
                  height="200"
                />
              </Link>
            </div>
          );
        })}
      </main>
    </div>
  );
}
