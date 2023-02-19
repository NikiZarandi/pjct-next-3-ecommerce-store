import './global.scss';
import { cookies } from 'next/headers';
import { getProducts } from '../database/products';
import CookieBanner from './cookieBanner';
import styles from './layout.module.scss';

export const metadata = {
  title: {
    default: 'Global Shop',
    template: 'Global Shop | %s',
  },
};

export default async function RootLayout({ children }) {
  const products = await getProducts();
  const productsCookie = cookies().get('cart');

  let productsCookieParsed = [];

  if (productsCookie) {
    productsCookieParsed = JSON.parse(productsCookie.value);
  }

  const productsWithQuantity = products.map((product) => {
    const productWithQuantity = { ...product, amount: 0 };

    // read the cookie and find the product

    const productInCookie = productsCookieParsed.find(
      (productObject) => product.id === productObject.id,
    );

    // if product is found the quantity gets updated
    if (productInCookie) {
      productWithQuantity.amount = productInCookie.amount;
    }
    return productWithQuantity;
  });

  // Calculate total sum of price
  let totalQuantity = 0;
  productsWithQuantity.forEach((product) => {
    totalQuantity += product.amount;
  });
  return (
    // eslint-disable-next-line jsx-a11y/html-has-lang
    <html>
      <head />
      <body className={styles.wholeBodyStyles}>
        <CookieBanner />
        <header className={styles.header}>
          <nav>
            <href
              className={styles.image}
              src="/images/nino.jpeg"
              alt="nino"
              width="300"
              height="600"
            />
            <ul className={styles.navBarContainer}>
              <li>
                <a className="active" href="/">
                  Home
                </a>
              </li>
              <li>
                <a href="/products">Products</a>
              </li>
              <li>
                <a href="/cart">
                  🛒 cart {totalQuantity} <cartPage />
                </a>
              </li>
              <li>
                <a href="/aboutUs">about us</a>
                <aboutUsPage />
              </li>
            </ul>
          </nav>
        </header>

        {children}

        <footer className={styles.footer}>
          <ul>
            <p>NIKI DESIGN E.U Schopenhauer</p>
            <p>Straße 22/9 1180 Wien Austria</p>
            <p>GENERAL TERMS AND CONDITIONS IMPRESSUM DATENSCHUTZ</p>
            <p>Follow Us Instagram</p>
            <p>service@nikidesign.com</p>
          </ul>
        </footer>
      </body>
    </html>
  );
}
