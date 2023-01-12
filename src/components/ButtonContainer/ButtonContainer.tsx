import React, {FC} from 'react'
import s from './ButtonContainer.module.scss';
import Button from '../UI/Button/Button';

interface IButtonContainerProps {
  
}

const ButtonContainer: FC<IButtonContainerProps> = () => {
  return (
    <section className={s.container}>
      <Button title="Блок 1" />
      <Button title="Блок 2" />
      <Button title="Блок 3" />
    </section>
  );
}

export default ButtonContainer;