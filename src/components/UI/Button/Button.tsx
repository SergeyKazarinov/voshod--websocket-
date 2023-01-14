import React, {FC} from 'react';
import s from './Button.module.scss';
import { useAppDispatch, useAppSelector } from '../../../hooks/useTypedSelector';
import { BLOCK_ONE, BLOCK_THREE, BLOCK_TWO } from '../../../utils/constants';
import { setButtonBlockOne, setButtonBlockThree, setButtonBlockTwo } from '../../../services/slices/buttonsSlice';

interface IButtonProps {
  title: 'Блок 1' | 'Блок 2' | 'Блок 3';
  isActiveButton: boolean;
}

const Button: FC<IButtonProps> = ({title, isActiveButton}) => {
  const { isButtonInactive } = useAppSelector(store => store.webSocket)
  const dispatch = useAppDispatch();

  const handleClick = () => {
    title === BLOCK_ONE && dispatch(setButtonBlockOne())
    title === BLOCK_TWO && dispatch(setButtonBlockTwo())
    title === BLOCK_THREE && dispatch(setButtonBlockThree())
  }

  return (
    <button
      type='button'
      className={`button ${s.button} ${isActiveButton && s.button_active} ${isButtonInactive && s.button_error}`}
      onClick={handleClick}
      disabled={isButtonInactive}
    >
      {title}
    </button>
  );
}

export default Button;