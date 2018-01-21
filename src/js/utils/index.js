import validUrl from 'valid-url';

export function debounce(callback, wait, context = this) {
  let timeout = null;

  let callbackArgs = null;
  const later = () => callback.apply(context, callbackArgs);

  return () => {
    callbackArgs = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
export const isValidEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

export const isValidPassword = (password) => {
  const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  return re.test(password);
};

export const isValidHostname = (hostname) => {
  const re = new RegExp(
    '^(?!www\\.|http:\\/\\/www\.)(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\\-]*[a-zA-Z0-9])\\.)+([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\\-]*[A-Za-z0-9])$',
  );
  return re.test(hostname);
};

export const isValidUrl = url => validUrl.isUri(url);

export const isEmptyObject = object => Object.keys(object).length === 0;

export const prettyDate = (date) => {
  if (typeof date === 'number' || typeof date === 'string') {
    date = new Date(date);
  }
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  return `${months[date.getUTCMonth()]} ${date.getUTCDate()}, ${date.getUTCFullYear()}`;
};

export const decodeBase64 = function (s) {
  let e = {},
    i,
    b = 0,
    c,
    x,
    l = 0,
    a,
    r = '',
    w = String.fromCharCode,
    L = s.length;
  const A = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  for (i = 0; i < 64; i++) {
    e[A.charAt(i)] = i;
  }
  for (x = 0; x < L; x++) {
    c = e[s.charAt(x)];
    b = (b << 6) + c;
    l += 6;
    while (l >= 8) {
      ((a = (b >>> (l -= 8)) & 0xff) || x < L - 2) && (r += w(a));
    }
  }
  return r.trim();
};

export const decamelize = (string) =>
    string.replace(/([A-Z])/g, ' $1')
      // uppercase the first character
    .replace(/^./, (str) => str.toUpperCase())
