'use client';

import { useState } from 'react';

export default function CookieBanner() {
  const localStorageValue = JSON.pars
  const
  window.localStorage.getItem('areCookiesTermsAccepted'),
};

  const initialState = localStorageValue == null ? false : localStorageValue;


  const [areCookiesBannerVisible, setAreCookiesTermsAccepted] = useState(initialState);

  return (
    !areCookiesBannerVisible && (
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
        >Accept
        </button>
      </>
    )
    );
}
