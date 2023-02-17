'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getParsedCookie } from '../../utils/cookies';
import styles from './Checkout.module.scss';

export default function Checkout({ products }) {
  const [productsCookieValue, setProductsCookieValue] = useState(false);

  useEffect(() => {
    const productsCookie = getParsedCookie('productsCookie');
    const cookieState = productsCookie === undefined ? false : productsCookie;
    setProductsCookieValue(cookieState);
  }, []);

  let productsCookieParsed = [];

  if (productsCookieValue) {
    productsCookieParsed = productsCookieValue;
  }

  const productsWithAmounts = products.map((product) => {
    const productWithAmounts = { ...product, amount: 0 };

    const productInCookie = productsCookieParsed.find(
      (productsObject) => product.id === productsObject.id,
    );

    if (productInCookie) {
      productWithAmounts.amount = productInCookie.amount;
    }

    return productWithAmounts;
  });

  const subTotal = () => {
    const total = productsWithAmounts.reduce((acc, product) => {
      return acc + product.price * product.amount;
    }, 0);
    return total;
  };

  return (
    <div>
      <h4>Your Order</h4>
      <div>
        {productsWithAmounts.some((item) => item.amount > 0) ? (
          // eslint-disable-next-line array-callback-return
          productsWithAmounts.map((item) => {
            if (item.amount > 0) {
              return (
                <div key={item.id} className={styles.itemRow}>
                  <Image
                    src={`/images/${item.image}`}
                    alt={item.name}
                    width="65"
                    height="45"
                  />
                  <p className={styles.header}>{item.header}</p>
                  <p className={styles.price}>€{item.price}</p>
                  <p className={styles.amount}>{item.amount}</p>
                </div>
              );
            }
          })
        ) : (
          <div>
            <div>Your Cart is empty. Check out these deals</div>
            <Link href="products">to the Deals...</Link>
          </div>
        )}
        {productsWithAmounts.some((item) => item.amount > 0) && (
          <div className={styles.total}>
            <p>Total: € {subTotal().toFixed(2)}</p>
          </div>
        )}
      </div>
    </div>
  );
}
