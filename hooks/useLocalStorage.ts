import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, fallbackValue?: T) {
  const [value, setValue] = useState(fallbackValue);

  useEffect(() => {
    const stored = localStorage.getItem(key);
    if (!stored) {
      return;
    }

    setValue(stored ? JSON.parse(stored) : fallbackValue);
  }, [fallbackValue, key]);

  useEffect(() => {
    if (!value) {
      return;
    }

    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}
