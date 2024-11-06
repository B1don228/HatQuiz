import { useEffect, useState } from "react";

interface IuseDebounceProps {
  delay?: number;
  value: string | null;
}

export const useDebounce = ({ delay = 2000, value }: IuseDebounceProps) => {
  const [debouncedValue, setDebouncedValue] = useState<string | null>(null);
  const [isDebouncing, setIsDebouncing] = useState<boolean>(false);

  useEffect(() => {
    if (!value) {
      setDebouncedValue(null);
      return setIsDebouncing(false);
    }

    setIsDebouncing(true);
    const timer = setTimeout(() => {
      setDebouncedValue(value);
      setIsDebouncing(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [value]);

  return { isDebouncing, debouncedValue };
};
