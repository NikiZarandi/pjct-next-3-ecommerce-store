import './global.scss';
import CookieBanner from './CookieBanner';
import styles from './layout.module.scss';

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
                <a href="/aboutUs">About us</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
        </header>

        {children}

        <footer className={styles.footer}>
          <ul>
            <p>ZARANDI DESIGN E.U Schopenhauer</p>
            <p>Straße 22/9 1180 Wien Austria</p>
            <p>GENERAL TERMS AND CONDITIONS IMPRESSUM DATENSCHUTZ</p>
            <p>Follow Us Instagram</p>
            <p>service@zarandidesign.com</p>
          </ul>
        </footer>
      </body>
    </html>
  );
}
