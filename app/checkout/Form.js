'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from './page.module.scss';

export default function FormComponent() {
  const [inputValue, setInputValue] = useState('');
  const router = useRouter();

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await router.push(`/thankyou`);
  };

  return (
    <div>
      <h4>Shipping Address</h4>
      <main className={styles.checkout_formWrapper}>
        <div className={styles.checkout_formLayout}>
          <form onSubmit={handleSubmit}>
            <label htmlFor="first">First name</label>
            <input
              onChange={onChange}
              data-test-id="checkout-first-name"
              name="first"
            />
            <label htmlFor="first">Last name</label>
            <input
              onChange={onChange}
              data-test-id="checkout-last-name"
              name="last"
            />
            <br />
            <label htmlFor="e-mail">E-mail</label>
            <input
              onChange={onChange}
              data-test-id="checkout-e-mail"
              name="e-mail"
            />
            <label htmlFor="address">Address</label>
            <input
              onChange={onChange}
              data-test-id="checkout-address"
              name="address"
            />
            <br />
            <label htmlFor="city">City</label>

            <input
              onChange={onChange}
              data-test-id="checkout-city"
              name="city"
            />
            <label htmlFor="postal-code">Postal code</label>
            <input
              onChange={onChange}
              data-test-id="checkout-postal-code"
              name="postal-code"
            />
            <hr className={styles.checkout_lineBreak} />
            <h4>Credit card details</h4>
            <label htmlFor="credit-card">Credit card number</label>
            <input
              onChange={onChange}
              data-test-id="checkout-credit-card"
              name="credit-card"
            />
            <label htmlFor="expiration-date">Expiration date</label>
            <input
              onChange={onChange}
              data-test-id="checkout-expiration-date"
              name="expiration-date"
            />
            <br />
            <label htmlFor="security-code">Security code</label>
            <input
              onChange={onChange}
              data-test-id="checkout-security-code"
              name="security-code"
            />
            <br />
            <button data-test-id="checkout-confirm-order">confirm order</button>
          </form>
        </div>
      </main>
    </div>
  );
}
