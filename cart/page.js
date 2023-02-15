import { useContext } from 'react';
// eslint-disable-next-line import/no-unresolved
import { CartContext } from '../contexts/CartContext';

export default function Cart() {
  const { cart, removeProduct } = useContext(CartContext);

  const cartItems = cart.map((item) => (
    <div key={item.id}>
      <p>
        {item.name} ({item.quantity})
      </p>
      <button onClick={() => removeProduct(item.id)}>Remove</button>
    </div>
  ));

  const totalCost = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems}
      <p>Total Cost: {totalCost}</p>
    </div>
  );
}
