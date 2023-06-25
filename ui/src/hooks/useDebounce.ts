import { useEffect, useState } from "react";

const useDebounce = <T>(value: T, delay?: number): T => {
  const [debouncedVal, setDebouncedVal] = useState<T>(value);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setDebouncedVal(value);
    }, delay || 500);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedVal;
}

export default useDebounce;