import {FC, SyntheticEvent, useEffect} from 'react';
import s from './Input.module.scss';
import { useSetValues } from '../../../hooks/useSetValues';
import { useAppSelector } from '../../../hooks/useTypedSelector';
import { IData, IStatus } from '../../../types/IWebSocketData';
import { IInputProps } from '../../../types/componentProps';

const Input: FC<IInputProps> = ({title, label, type, id, placeholder, pattern, min, max, minLength, onFocus, onBlur, onSendData}) => {
  const { data, status } = useAppSelector(store => store.webSocket);
  const {values, handleChange, setValues} = useSetValues(data);
  const block = `block${title!.slice(-1)}`;


  useEffect(() => {
    setValues((state) => ({...state, [id]: data[id as keyof IData]}))
  }, [data])

  
  const handleFocus = (e: SyntheticEvent) => {
    onFocus({
      command: 'focus',
      block: block,
      field: id
    });
  }

  const handleBlur = (e: SyntheticEvent) => {
    onBlur({
      command: 'blur',
      block: block,
      field: id
    });

    onSendData({
      command: 'update',
      block: block,
      valueType: id,
      value: values[id as keyof IData],
    })
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
        value={values[id as keyof IData]}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        readOnly={status[id as keyof IStatus]}
      />
    </div>
  );
}

export default Input;