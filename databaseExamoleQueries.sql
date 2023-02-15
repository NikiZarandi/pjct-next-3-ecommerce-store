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
















'use client';

import { getParsedCookie, setStringifiedCookie } from '../../../utils/cookies';

export default function product(props: Props) {
  return (
    <div>
      {/* <h2>{props.product.name}</h2> */}
      <button
        onClick={() => {
          // get the cookie
          const productsInCookies = getParsedCookie('productCookie');

          if (!productsInCookies) {
            // if there is no cookie function stop here
            return;
          }

          // try to find the product inside of the cookies
          const foundProduct = productsInCookies.find((productInCookie) => {
            return productInCookie.id === props.product.id;
          });

          // my product is not inside of the cookie
          if (foundProduct) {
            // update the cookie with the new values
            foundProduct.stars--;
            // if there is a negative value set number to 0
            if (foundProduct.stars < 0) {
              foundProduct.stars = 0;
            }
            // Update the cookie after transformation
            setStringifiedCookie('productsCookie', productsInCookies);
          }
        }}
      >
        - ⭐️
      </button>
      <button
        onClick={() => {
          // get the cookie
          const productsInCookies = getParsedCookie('productsCookie');

          // if there is no cookie we initialize the value with a 1
          if (!productsInCookies) {
            // create the cookie with a new object for the product
            setStringifiedCookie('productsCookie', [
              { id: props.product.id, stars: 1 },
            ]);
            // if there is no cookie function stop here
            return;
          }

          const foundProduct = productsInCookies.find((productInCookie) => {
            return productInCookie.id === props.product.id;
          });

          // my product is inside of the cookie
          if (foundProduct) {
            // Add a start to the foundFruit
            foundProduct.stars++;
            // my product is not inside of the cookie
          } else {
            // Add a the product to the array of products in cookies
            productsInCookies.push({ id: props.product.id, stars: 1 });
          }

          // Update the cookie after transformation
          setStringifiedCookie('productsCookie', productsInCookies);
        }}
      >
        + ⭐️
      </button>
    </div>
  );
}
