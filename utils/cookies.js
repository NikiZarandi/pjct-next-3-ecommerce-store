import cookies from 'js-cookie';

export function getParsCookie(key) {
  const cookieValue = cookies.get(key);

  if (!cookieValue) {
    return undefined;
  }
}

try {
  return JSON.parse(cookieValue);
} catch (err) {
  return undefined;
}

export function setLocalStorage(key, Value) {
  cookies.set(key, JSON.stringify(Value));
}
