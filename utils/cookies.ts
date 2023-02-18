// import Cookies from 'js-cookie';

// // more robust way to get items from cookies without parsing all the time
// export function getParsedCookie(key: string): CookieValue | undefined {
//   const cookieValue = Cookies.get(key);

//   if (!cookieValue) {
//     return undefined;
//   }

//   try {
//     return JSON.parse(cookieValue); // Type should be a string
//   } catch (err) {
//     return undefined;
//   }
// }

// export type CookieValue = {
//   amount: number;
//   id: number;
// }[];

// // more robust way to set items to set the cookie without stringify all the time
// export function setStringifiedCookie(key: string, value: CookieValue) {
//   Cookies.set(key, JSON.stringify(value));
// }

// export function deleteCookie(key: string) {
//   Cookies.remove(key);
// }

// export function stringifyCookieValue(value: CookieValue) {
//   return JSON.stringify(value);
// }

import Cookies from 'js-cookie';

export function getParsedCookie(key) {
  const cookieValue = Cookies.get(key);

  if (!cookieValue) {
    return undefined;
  }

  try {
    return JSON.parse(cookieValue); // Type should be a string
  } catch (err) {
    return undefined;
  }
}

export function setStringifiedCookie(key, value) {
  Cookies.set(key, JSON.stringify(value));
}
