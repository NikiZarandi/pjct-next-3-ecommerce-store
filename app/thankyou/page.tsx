import Link from 'next/link';
import styles from './page.module.scss';

export const metadata = {
  title: 'Thank You',
  description: 'Thank you for order ',
  icons: {
    shortcut: '/icon.svg',
  },
};
export default function ThankyouPage() {
  return (
    <main className={styles.thankyou_layoutWrapper}>
      <div className={styles.thankyou_textLayout}>
        <h1> Thank you!</h1>
        <p>Your order was placed successfully.</p>
        <span>
          <Link href="/"> Back to home [↙]</Link>
        </span>
      </div>
    </main>
  );
}
