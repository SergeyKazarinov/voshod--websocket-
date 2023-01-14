import React, {FC, useEffect} from 'react';
import s from './Block.module.scss';
import { useWebSocket } from '../../hooks/useWebSocket';
import { SUBSCRIBE, UNSUBSCRIBE } from '../../utils/constants';
import { useAppDispatch } from '../../hooks/useTypedSelector';
import { setErrorConnect, setIsButtonInactive } from '../../services/slices/webSocketSlice';
import { setAllButton } from '../../services/slices/buttonsSlice';

interface IBlockProps {
  title: string;
  children: React.ReactNode;
  ws: WebSocket | null;
}

const Block: FC<IBlockProps> = ({title, children, ws}) => {
  const dispatch = useAppDispatch();
  const { subscribe, unsubscribe } = useWebSocket(ws);
  const block = `block${title.slice(-1)}`

  useEffect(() => {
    if (ws?.readyState === 3) {
      dispatch(setIsButtonInactive(true))
      dispatch(setAllButton(false))
      dispatch(setErrorConnect(true))
    }
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