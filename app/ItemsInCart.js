import { cookies } from 'next/headers';

export default function ItemsInCart() {
  const cart = cookies().get('productsCookie');
  let itemInCart = [];
  if (cart) {
    itemInCart = JSON.parse(cart.value);
  }

  let totalAmountOfItemsInCart = 0;
  for (let i = 0; i < itemInCart.length; i++) {
    const item = itemInCart[i];
    if (item) {
      totalAmountOfItemsInCart += item.amount;
    }
  }

  /* Added a check for the existence of 'item' before accesing its amount property.
  This avoids the possibility of accessing an undefined value => TypeScript
*/

  return <span data-test-id="cart-count">{totalAmountOfItemsInCart}</span>;
}
