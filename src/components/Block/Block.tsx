import React, {FC, useEffect} from 'react';
import s from './Block.module.scss';
import { SUBSCRIBE, UNSUBSCRIBE } from '../../utils/constants';
import { IBlockProps } from '../../types/componentProps';

const Block: FC<IBlockProps> = ({title, children, subscribe, unsubscribe}) => {
  const block = `block${title.slice(-1)}`

  useEffect(() => {
    subscribe({command: SUBSCRIBE, block: block})

    return () => {
      unsubscribe({command: UNSUBSCRIBE, block: block})
    }
  }, [])

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