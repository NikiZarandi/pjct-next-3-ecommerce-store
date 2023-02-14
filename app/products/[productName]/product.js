'use client';

import { getParseCookie, setStrinifyCookies } from '../../../utils/cookies';

export default function Product(props) {
  return (
    <div>
      <h2>{props.product.name}</h2>
      <button>-1</button>
      <button
        onClick={() => {
          const productsInCookies = getParseCookie('productsCookies');
          if (!productsInCookies) {
            setStrinifyCookies('produktsCookie', [
              { id: props.fruit.id, stars: 1 },
            ]);
          } else if (
            productsInCookies.find((productInCookie) => {
              return productInCookie.id === props.product.id;
            })
          ) {
            const foundProduct = productsInCookies.find((productInCookie) => {
              return productInCookie.id === props.product.id;
            });

            foundProduct.stars++;

            setStrinifyCookies('productsCookies', productsInCookies);
          }
        }}
      >
        +1
      </button>
    </div>
  );
}
