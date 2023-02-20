'use client';
import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/products';
// import styles from './page.module.scss';
import RemoveProductButton from './RemoveProductButton';

export const metadata = {
  title: 'Cart',
  description: 'Review your purchases.',
  icons: {
    shortcut: '/icon.svg',
  },
};

export default async function cartPage() {
  // Get cookie
  const products = await getProducts();
  const productsCookie = cookies().get('cart');

  let productsCookieParsed = [];

  if (productsCookie) {
    productsCookieParsed = JSON.parse(productsCookie.value);
  }

  const productsWithQuantity = products.map((product) => {
    const productWithQuantity = { ...product, quantity: 0 };

    // Read the cookie and find the product
    const productInCookie = productsCookieParsed.find(
      (productObject) => product.id === productObject.id,
    );

    // if product is found the quantity gets updated
    if (productInCookie) {
      productWithQuantity.quantity = productInCookie.quantity;
    }
    return productWithQuantity;
  });

  // Calculate the total sum of price
  let totalPrice = 0;
  productsWithQuantity.forEach((product) => {
    totalPrice += product.price * product.quantity;
  });
  // Render only products with quantity to cart list
  const productsInCart = productsWithQuantity.filter(
    (product) => product.quantity > 0,
  );

  return (
    <span>
      <main>
        <h3>ORDER SUMMARY</h3>
        <hr />
        <div>
          {productsInCart.map((product) => {
            return (
              <div key={product.id}>
                <Link>
                  <Image
                    src={`/images/${product.id}.png`}
                    alt={product.type}
                    width="156"
                    height="207"
                  />
                  <span>
                    <h3>{product.firstName}</h3>
                    <p>QTY: {product.quantity}</p>
                    <p>{product.price}</p>
                  </span>
                </Link>
                <div>
                  <RemoveProductButton product={product} />
                </div>
              </div>
            );
          })}
          <br />
          <p>Total {totalPrice}</p>
          <Link href="/checkout">
            <button>Checkout</button>
          </Link>
          <div>
            <a href="/products">Back to Products [↙]</a>
          </div>
        </div>
      </main>
    </span>
  );
}
// className={styles.cart_removeButton}

// className={styles.cart_cartBackToProducts}

// className={styles.cart_checkoutButton}
// className={styles.cart_totalPriceLayout}
