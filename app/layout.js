import './global.scss';
import ItemsInCart from '../app/ItemsInCart';
import CookieBanner from './CookieBanner';
import styles from './layout.module.scss';

export const metadata = {
  title: {
    default: 'Global Shop',
    template: 'Global Shop | %s',
  },
};

export default function RootLayout({ children }) {
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
                  🛒 <ItemsInCart />
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
