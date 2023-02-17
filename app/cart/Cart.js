'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getParsedCookie, setStringifiedCookie } from '../../utils/cookies';
import styles from './Cart.module.scss';

export default function Cart({ products }) {
  const [productsCookieValue, setProductsCookieValue] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const productsCookie = getParsedCookie('productsCookie');
    const cookieState = productsCookie === undefined ? false : productsCookie;
    setProductsCookieValue(cookieState);
  }, []);

  /*
  The effect is to retrieve the value of the productsCookie from the cookies. If the productsCookie does not exist, the value of the state will be false.
*/

  let productsCookieParsed = [];

  if (productsCookieValue) {
    productsCookieParsed = productsCookieValue;
  }

  const productsWithAmounts = products.map((product) => {
    const productWithAmounts = { ...product, amount: 0 };

    const productInCookie = productsCookieParsed.find(
      (productObject) => product.id === productObject.id,
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

  /*
  The function uses the reduce method to iterate over each product. On each iteration, the callback functions calculates the cost of the current product by multiplying its price by its amount, and adds the result to the accumulator acc.
*/

  return (
    <div className={styles.container}>
      {productsWithAmounts.some((item) => item.amount > 0) ? (
        // eslint-disable-next-line array-callback-return
        productsWithAmounts.map((item) => {
          if (item.amount > 0) {
            return (
              <div key={item.id} className={styles.left}>
                <div key={item.id} className={styles.leftBox}>
                  <div
                    key={item.id}
                    className={styles.itemRow}
                    data-test-id={`cart-product-${item.id}`}
                  >
                    <Image
                      src={`/images/${item.image}`}
                      alt={item.name}
                      width="65"
                      height="45"
                    />
                    <p className={styles.header}>{item.header}</p>
                    <p className={styles.price}>€ {item.price}</p>
                    <p
                      className={styles.amount}
                      data-test-id={`cart-product-quantity-${item.id}`}
                    >
                      {item.amount}
                    </p>
                    <button
                      data-test-id={`cart-product-remove${item.id}`}
                      className={styles.btn}
                      onClick={() => {
                        if (!productsCookieValue) {
                          return;
                        }
                        const newProductsCookie = [...productsCookieValue];
                        const foundItem = newProductsCookie.find(
                          (itemInCart) => {
                            return itemInCart.id === item.id;
                          },
                        );

                        if (foundItem) {
                          foundItem.amount--;
                          if (foundItem.amount < 0) {
                            foundItem.amount = 0;
                          }
                        }
                        setProductsCookieValue(newProductsCookie);
                        setStringifiedCookie(
                          'productsCookie',
                          newProductsCookie,
                        );
                        router.refresh();
                      }}
                    >
                      Remove
                    </button>
                    {/* <button
                  className={styles.btn}
                  onClick={() => {
                    if (!productsCookieValue) {
                      return;
                    }
                    const newProductsCookie = [...productsCookieValue];
                    const foundItem = newProductsCookie.find((itemInCart) => {
                      return itemInCart.id === item.id;
                    });

                    if (foundItem) {
                      foundItem.amount = 0;
                    }
                    setProductsCookieValue(newProductsCookie);
                    setStringifiedCookie('productsCookie', newProductsCookie);
                    router.refresh();
                  }}
                >
                  Remove all
                </button> */}
                  </div>
                </div>
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
        <div className={styles.right}>
          <div className={styles.rightBox}>
            <div className={styles.total}>
              <p data-test-id="cart-total">Total: € {subTotal().toFixed(2)}</p>
              <Link href="checkout">
                <button data-test-id="cart-checkout" className={styles.btn}>
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
