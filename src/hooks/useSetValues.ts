import { useState, useCallback, ChangeEvent } from "react";

interface IValues {
  [name: string]: string | number;
}

export const useSetValues = () => {
  const [values, setValues] = useState<IValues>({});

  const handleChange = (event: ChangeEvent<HTMLFormElement & HTMLInputElement>): void => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({...values, [name]: value});
  };
  
  return { values, handleChange, setValues};
}