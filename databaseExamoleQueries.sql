CREATE TABLE products (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name varchar(40) NOT NULL,
  type varchar(40) NOT NULL
);

INSERT INTO
  products(name, type)
VALUES
  ('gelin', 'ring'),
  ('tira', 'ring'),
  ('mina', 'ring'),
  ('maya', 'ring');

SELECT * FROM products;






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
    productId: string;
  };
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






import { products } from '../../../migrations/1676216545-createTableProduct.mjs';

export default function singleProduct({ params }) {
  const singleProduct = products.find((product) => {
    return product.name.toLowerCase() === params.productname;
  });

  return (
    <div>
      <h2>{singleProduct.name}</h2>
    </div>
  );
}
