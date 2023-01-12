import React, {FC} from 'react';
import s from './Button.module.scss';

interface IButtonProps {
  title: string;
  
}

const Button: FC<IButtonProps> = ({title}) => {
  return (
    <button type='button' className={`button ${s.button}`}>{title}</button>
  );
}

export default Button;