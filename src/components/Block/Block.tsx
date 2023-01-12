import React, {FC} from 'react';
import s from './Block.module.scss';
import Input from '../UI/Input/Input';

interface IBlockProps {
  title: string;
  children: React.ReactNode;
}

const Block: FC<IBlockProps> = ({title, children}) => {
  return (
    <div className={s.block}>
      <h2 className={s.title}>{title}</h2>
      <div className={s.line}></div>
      <div className={s.inputContainer}>
        {children}
      </div>
    </div>
  );
}

export default Block;