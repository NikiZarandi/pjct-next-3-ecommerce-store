import { getProducts } from '../../database/products';
import Cart from './Cart';

export const metadata = {
  title: 'Cart',
  description: 'Cart Page where all the items in the cart are listed',
};

export default async function CartPage() {
  const products = await getProducts();
  return <Cart products={products} />;
}
