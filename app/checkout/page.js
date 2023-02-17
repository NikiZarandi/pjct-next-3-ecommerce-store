import { getProducts } from '../../database/products';
import ItemsInCart from '../ItemsInCart';
import Checkout from './Checkout';
import CheckoutForm from './Form';
import styles from './page.module.scss';

export const metadata = {
  title: 'Checkout',
  description: 'Checkout Page',
};

export default async function CheckoutPage() {
  const products = await getProducts();
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.leftBox}>
          <h1>Checkout</h1>
          <CheckoutForm />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.rightBox}>
          <Checkout products={products} />
          <p>
            Items in your Cart: <ItemsInCart />
          </p>
        </div>
      </div>
    </div>
  );
}
