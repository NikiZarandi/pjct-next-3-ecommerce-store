'use client';

import { cookies } from 'next/headers.js';
import router from 'next/router';
import React, { useState } from 'react';
import { products } from '../../../migrations/1676216545-createTableProduct.mjs';
import { getParsedCookie, setStringifiedCookie } from '../../../utils/cookies';

// import styles from './Products.module.scss';

export default function IndexPage(props) {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count <= 1 ? 1 : count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>

      <button
        onClick={() => {
          // get the cookie
          const producstInCookies = getParsedCookie('productsCookie');

          // if there is no cookie we initialize the value with 1
          if (!producstInCookies) {
            // create the cookie with a new object
            setStringifiedCookie('productsCookie', [
              { id: props.product.id, amount: 1 },
            ]);
            // if there is no cookie stop here
            return;
          }

          // try to find the product inside of the cookie
          const foundProduct = producstInCookies.find((productCookie) => {
            return productCookie.id === products.id;
          });

          // my product is inside of the cookie
          if (foundProduct) {
            // Add amount to the foundProduct
            foundProduct.amount = Number(foundProduct.amount) + Number(count);
            // my product is inside of the cookie
          } else {
            // Add the product to the array of products in cookies
            producstInCookies.push({
              id: products.id,
              amount: 1,
            });
          }

          // Update the cookie after transformation
          setStringifiedCookie('productsCookie', producstInCookies);
          router.refresh();
        }}
      >
        Add to Cart
      </button>
    </>
  );
}
