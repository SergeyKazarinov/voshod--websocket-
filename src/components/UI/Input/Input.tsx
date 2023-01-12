import React, {FC} from 'react';
import s from './Input.module.scss';

interface IInputProps {
  label: string;
  type: string;
  id: string;
  placeholder: string;
  pattern?: string;
  min?: number;
  max?: number;
  minLength?: number;
}

const Input: FC<IInputProps> = ({label, type, id, placeholder, pattern, min, max, minLength}) => {
  return (
    <div className={s.inputContainer}>
      <label htmlFor={id} className={s.label}>{label}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className={s.input}
        pattern={pattern}
        min={min}
        max={max}
        minLength={minLength}
      />
    </div>
  );
}

export default Input;