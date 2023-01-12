import React, {FC} from 'react';
import header from '../../images/header.png';
import s from './Header.module.scss';

interface IHeaderProps {
  
}

const Header: FC<IHeaderProps> = () => {
  return (
    <header className={s.header}>
      <img src={header} className={s.logo} alt='Логотоип компании' />
    </header>
  );
}

export default Header;