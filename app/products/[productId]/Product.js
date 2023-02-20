'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { products } from '../../../migrations/1676216545-createTableProduct.mjs';
import { getParsedCookie, setStringifiedCookie } from '../../../utils/cookies';
import styles from './page.module.scss';

// import styles from './Products.module.scss';

export default function Product(props) {
  const [count, setCount] = useState(1);
  const router = useRouter();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count <= 1 ? 1 : count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>

      <button
        className={styles.button_formWrapper}
        onClick={() => {
          // get the cookie
          const producstInCookies = getParsedCookie('cart');

          // if there is no cookie we initialize the value with 1
          if (!producstInCookies) {
            // create the cookie with a new object
            setStringifiedCookie('cart', [
              { id: props.product.id, amount: count },
            ]);
            // if there is no cookie stop here
            return;
          }

          // try to find the product inside of the cookie
          const foundProduct = producstInCookies.find((productCookie) => {
            return productCookie.id === props.product.id;
          });

          // my product is inside of the cookie
          if (foundProduct) {
            // Add amount to the foundProduct
            foundProduct.amount = Number(foundProduct.amount) + Number(count);
            // my product is inside of the cookie
          } else {
            // Add the product to the array of products in cookies
            producstInCookies.push({
              id: props.product.id,
              amount: count,
            });
          }

          // Update the cookie after transformation
          setStringifiedCookie('cart', producstInCookies);
          router.refresh();
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
