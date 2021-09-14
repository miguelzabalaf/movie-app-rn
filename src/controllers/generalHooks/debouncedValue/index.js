import { useEffect, useState } from "react";

const useDebouncedValue = (input, debounceTime = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(input);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(input);
    }, debounceTime);
    return () => {
      clearTimeout(timeout);
    };
  }, [input]);

  return {
    debouncedValue,
  };
};

export default useDebouncedValue;
