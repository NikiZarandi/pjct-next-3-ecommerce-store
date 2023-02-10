'use client';

import { getParseCookie, setStrinifyCookies } from '../../../utils/cookies';
import { products } from '../../databace';

export default function Product(props) {
  return (
    <div>
      <h2>{props.product.name}</h2>
      <button>-1</button>
      <button
        onClick={() => {
          const ProductsInCookies = getParseCookie('productsCookies');
          if (!productsInCookies) {
            setStrinifyCookies('produktsCookie', [
              { id: props.fruit.id, stars: 1 },
            ]);
          } else if (
            productInCookies.find((productInCookie) => {
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
