import React, {FC} from 'react';
import s from './Loader.module.scss';

const Loader: FC = () => {
  return (
    <>
      <div className={s.loader}></div>
      <p>Подключение</p>
    </>
  );
}

export default Loader;