import { useState, useEffect } from "react";

export const useLocalStorageState = (key, defaultVal) => {
  const [state, setState] = useState(() => {
    let val;
    try {
      val = JSON.parse(localStorage.getItem(key) || JSON.stringify(defaultVal));
    } catch (e) {
      val = defaultVal;
    }
    return val;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
};
