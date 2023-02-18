'use client';

import { useRouter } from 'next/navigation';
// eslint-disable-next-line import/no-unresolved
import { getParsedCookie, setStringifiedCookie } from '../../utils/cookies';
import styles from './page.module.scss';

export default function deleteProduct(props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  return (
    <button
      onClick={() => {
        const productsInCookies = getParsedCookie('productsCookie');

        const foundProduct = productsInCookies.filter((productInCookie) => {
          return productInCookie.id !== props.product.id;
        });

        setStringifiedCookie('productsCookie', foundProduct);
        router.refresh();
      }}
    >
      [ x ]
    </button>
  );
}
