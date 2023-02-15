'use client';

import { getParsedCookie, setStringifiedCookie } from '../../../utils/cookies';

export default function singleProduct(props: Props) {
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
