import {FC, SyntheticEvent, useEffect} from 'react';
import s from './Input.module.scss';
import { useSetValues } from '../../../hooks/useSetValues';
import { useAppSelector } from '../../../hooks/useTypedSelector';
import { IData, IStatus } from '../../../types/IWebSocketData';
import { IFocusData } from '../../../types/webSocketSlice';

interface IInputProps {
  title: string;
  label: string;
  type: string;
  id: string;
  placeholder: string;
  pattern?: string;
  min?: number;
  max?: number;
  minLength?: number;
  onFocus: ({command, block, field}: IFocusData) => void;
  onBlur: ({command, block, field}: IFocusData) => void;
}

const Input: FC<IInputProps> = ({title, label, type, id, placeholder, pattern, min, max, minLength, onFocus, onBlur}) => {
  const {values, handleChange, setValues} = useSetValues();
  const { data, status } = useAppSelector(store => store.webSocket);

  useEffect(() => {
    for (let property in data) {
      setValues({...values, [property]: data[property as keyof IData]})
    }
  }, [data])
  
  const handleFocus = (e: SyntheticEvent) => {
    onFocus({
      command: 'focus',
      block: `block${title!.slice(-1)}`,
      field: id
    });
  }

  const handleBlur = (e: SyntheticEvent) => {
    onBlur({
      command: 'blur',
      block: `block${title!.slice(-1)}`,
      field: id
    });
  }

  return (
    <div className={s.inputContainer}>
      <label htmlFor={id} className={s.label}>{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        className={s.input}
        pattern={pattern}
        min={min}
        max={max}
        minLength={minLength}
        value={values[id] || data[id as keyof IData]}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        readOnly={status[id as keyof IStatus]}
      />
    </div>
  );
}

export default Input;