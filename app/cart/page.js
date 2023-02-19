import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/products';
import styles from './page.module.scss';
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
    const productWithQuantity = { ...product, amount: 0 };

    // Read the cookie and find the product
    const productInCookie = productsCookieParsed.find(
      (productObject) => product.id === productObject.id,
    );

    // if product is found the quantity gets updated
    if (productInCookie) {
      productWithQuantity.amount = productInCookie.amount;
    }
    return productWithQuantity;
  });

  // Calculate the total sum of price
  let totalPrice = 0;
  productsWithQuantity.forEach((product) => {
    totalPrice += product.price * product.amount;
  });
  // Render only products with quantity to cart list
  const productsInCart = productsWithQuantity.filter(
    (product) => product.amount > 0,
  );

  return (
    <span>
      <main className={styles.cart_pageWrapper}>
        <h3>ORDER </h3>
        <hr className={styles.cart_lineBreak} />
        <div className={styles.cart_imageLayout}>
          {productsInCart.map((product) => {
            return (
              <div key={product.id}>
                <Link href={`/products/${product.id}`}>
                  <Image
                    src={`/images/${product.id}.jpeg`}
                    alt={product.type}
                    width="200"
                    height="200"
                  />
                  <span className={styles.cart_textLayout}>
                    <h3>{product.name}</h3>
                    <p>QTY: {product.amount}</p>
                    <p>{product.price}</p>
                  </span>
                </Link>
                <div className={styles.cart_removeButton}>
                  <RemoveProductButton product={product} />
                </div>
              </div>
            );
          })}
          <br />
          <p className={styles.cart_totalPriceLayout}>Total {totalPrice}</p>
          <Link href="/checkout">
            <button className={styles.cart_checkoutButton}>Checkout</button>
          </Link>
          <div className={styles.cart_cartBackToProducts}>
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
