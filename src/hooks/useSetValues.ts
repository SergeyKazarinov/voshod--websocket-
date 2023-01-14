import { useState, ChangeEvent } from "react";
import { IData } from "../types/IWebSocketData";

export const useSetValues = (data: IData) => {
  const [values, setValues] = useState<IData>(data);

  const handleChange = (event: ChangeEvent<HTMLFormElement & HTMLInputElement>): void => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({...values, [name]: value});
  };

  return { values, handleChange, setValues};
}