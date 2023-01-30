type KeyValues =
  | "signInToken"
  | "did"
  | "cloudWalletAccessToken"
  | "signInUsername";

export const getItemFromSessionStorage = (
  key: KeyValues
): string | undefined => {
  const stored = sessionStorage.getItem(key);
  if (!stored) {
    return undefined;
  }

  return JSON.parse(stored);
};

export const setItemToSessionStorage = (
  key: KeyValues,
  value: string
): void => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

export const clearSessionStorage = () => {
  try {
    sessionStorage.clear();
  } catch (error) {
    return error;
  }
};

export const useSessionStorage = () => {
  const setItem = setItemToSessionStorage;
  const getItem = getItemFromSessionStorage;
  const clear = clearSessionStorage;

  return {
    setItem,
    getItem,
    clear,
  };
};
