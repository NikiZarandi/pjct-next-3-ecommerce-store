import Image from 'next/image';
import CookieBanner from './cookieBanner';
import GenerateButten from './GenerateButton js./GenerateButton';
import styles from './page.module.scss';

export default function HomePage() {
  return (
    <main id="wholeBodyStyles">
      <div className={styles.h2}>
        <h2 className={styles.hElemen}>Welcome to the world of NIKI DESIGN!</h2>
        <div className={styles.divElementOne}>
          We live by the motto: “Our customers are the focus”. Your wishes and
          concerns are important to us. We want to inspire you with our design
          ideas. Ultimately the only thing that really counts is your success.
          That what the team of NIKI DESIGN is there for.
        </div>
        <Image
          className={styles.image}
          src="/images/shin.jpeg"
          alt="shin"
          width="300"
          height="600"
        />
        <GenerateButten />
      </div>
    </main>
  );
}
