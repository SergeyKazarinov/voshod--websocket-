import React, {FC} from 'react'
import s from './ButtonContainer.module.scss';
import Button from '../UI/Button/Button';
import { useAppSelector } from '../../hooks/useTypedSelector';
import { BLOCK_ONE, BLOCK_THREE, BLOCK_TWO } from '../../utils/constants';

const ButtonContainer: FC = () => {
  const { buttonActiveBlockOne, buttonActiveBlockTwo, buttonActiveBlockThree } = useAppSelector(store => store.buttons)

  return (
    <section className={s.container}>
      <Button title={BLOCK_ONE} isActiveButton={buttonActiveBlockOne}/>
      <Button title={BLOCK_TWO} isActiveButton={buttonActiveBlockTwo}/>
      <Button title={BLOCK_THREE} isActiveButton={buttonActiveBlockThree}/>
    </section>
  );
}

export default ButtonContainer;