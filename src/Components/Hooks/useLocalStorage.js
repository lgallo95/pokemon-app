import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const item = window.localStorage.getItem(key);

  const [storedValue, setStoredValue] = useState(() => {
    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = (value) => {
    const doesExist = storedValue.find((x) => x.id === value.id);

    if (!doesExist) {
      const newArray = [...storedValue, value];
      window.localStorage.setItem(key, JSON.stringify(newArray));
      setStoredValue(newArray);
    }
  };
  const removeVal = (value) => {
    const newArray = storedValue.filter((x) => x.id !== value.id);
    window.localStorage.setItem(key, JSON.stringify(newArray));
    setStoredValue(newArray);
  };

  return [storedValue, setValue, removeVal];
};

export default useLocalStorage;
