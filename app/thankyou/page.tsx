import Image from 'next/image';
import Link from 'next/link';
import thankyou_bg from '../../../../../thankyou_bg.jpeg';
import styles from './page.module.scss';

export const metadata = {
  title: 'Thank You',
  description:
    "Thank you for choosing our Pilates service! We're excited to help you on your journey to a healthier you. On this page, you'll find important details about your purchase and what to expect next. We're committed to providing you with exceptional service, so please don't hesitate to reach out if you have any questions or concerns. Get ready to feel stronger, more flexible, and more energized than ever before!",
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
        <span className={styles.thankyou_backToHomeNav}>
          <Link href="/"> Back to home [↙]</Link>
        </span>
      </div>
      <div>
        <div className={styles.thankyou_backgroundImage}>
          <Image src={thankyou_bg} alt="background" />
        </div>
      </div>
    </main>
  );
}
