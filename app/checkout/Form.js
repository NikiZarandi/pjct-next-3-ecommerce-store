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
      <main className={styles.checkout_formWrapper}>
        <h6>Shipping Address & Credit card details</h6>

        <div className={styles.checkout_formLayout}>
          <form onSubmit={handleSubmit}>
            <label htmlFor="first">First name</label>
            <input onChange={onChange} name="first" />
            <label htmlFor="first">Last name</label>
            <input onChange={onChange} name="last" />
            <br />
            <label htmlFor="e-mail">E-mail</label>
            <input onChange={onChange} name="e-mail" />
            <label htmlFor="address">Address</label>
            <input onChange={onChange} name="address" />
            <br />
            <label htmlFor="city">City</label>

            <input onChange={onChange} name="city" />
            <label htmlFor="postal-code">Postal code</label>
            <input onChange={onChange} name="postal-code" />
            <hr className={styles.checkout_lineBreak} />

            <label htmlFor="credit-card">Credit card number</label>
            <input onChange={onChange} name="credit-card" />
            <label htmlFor="expiration-date">Expiration date</label>
            <input onChange={onChange} name="expiration-date" />
            <br />
            <label htmlFor="security-code">Security code</label>
            <input onChange={onChange} name="security-code" />
            <br />
            <button>confirm order</button>
          </form>
        </div>
      </main>
    </div>
  );
}
