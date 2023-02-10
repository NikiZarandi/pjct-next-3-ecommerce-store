'use client';

// import Link from 'next/link';
import { useState } from 'react';

export default function CookieBanner() {
  const localStorageValue = JSON.parse(
    window.localStorage.getItem('areCookiesTermsAccepted'),
  );

  const initialState = localStorageValue === null ? false : localStorageValue;

  const [areCookiesTermsAccepted, setAreCookiesTermsAccepted] =
    useState(initialState);

  return (
    !areCookiesTermsAccepted && (
      <>
        <div>This is the cookie Police. Please accept terms and conditions</div>
        <button
          onClick={() => {
            setAreCookiesTermsAccepted(false);
            window.localStorage.setItem(
              'areCookiesTermsAccepted',
              JSON.stringify(true),
            );
          }}
        >
          Accept
        </button>
      </>
    )
  );
}
