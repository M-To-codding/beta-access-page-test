export const setAuthorizedUserToken = (authToken: string): void => {
  if (authToken.length > 0) {
    setCookie('auth_token', authToken);
  }
};

export const getAuthorizedUserToken = (): string | undefined => {
  return getCookie('auth_token');
};

export  const deleteCookie = (name: string) => {
  setCookie(name, "", {
    'max-age': -1
  })
};

const setCookie = (name: string, value: string, ...options: any) => {
  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
};

const getCookie = (name: string) => {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
};