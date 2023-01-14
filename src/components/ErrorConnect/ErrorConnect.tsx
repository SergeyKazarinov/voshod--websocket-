import React, {FC} from 'react';
import s from './ErrorConnect.module.scss';
import Loader from '../UI/Loader/Loader';

const ErrorConnect: FC = () => {
  return (
    <section className={s.errorConnect}>
      <h2 className={s.title}>Сервер недоступен</h2>
      <Loader />
    </section>
  );
}

export default ErrorConnect;