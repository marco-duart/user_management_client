const env = {
  BASE_URL: import.meta.env.VITE_BASE_URL as string,
  LOCALSTORAGE_TOKEN_KEY: import.meta.env.VITE_LOCALSTORAGE_TOKEN_KEY as string,
};

export { env };
