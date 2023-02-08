// import { products } from 'databace/products';
import Image from 'next/image';
import Link from 'next/link';
// import { getTrailingCommentRanges } from 'typescript';
import { products } from '../../database/products';

// export const dynamic = 'force-dynamic';

// eslint-disable-next-line no-redeclare

// const Products = [
//   { id: 4, name: 'galin', type: 'ring' },
//   { id: 5, name: 'tira', type: 'ring' },
//   { id: 6, name: 'mina', type: 'ring' },
//   { id: 7, name: 'maya', type: 'ring' },
// ];

export default function ProductsPage() {
  return (
    <>
      <h1>Products</h1>
      <main>
        {products.map((product) => {
          return (
            <div key={product.id}>
              <Link href={`/products/${product.name.toLocaleLowerCase()}`}>
                <h2>{product.name}</h2>
              </Link>
              <Link href={`/products/${product.name.toLocaleLowerCase()}`}>
                <Image
                  src={`/images/${product.name}-${product.id}.jpeg`}
                  alt={product.type}
                  width="200"
                  height="200"
                />
              </Link>
            </div>
          );
        })}
      </main>
    </>
  );
}
