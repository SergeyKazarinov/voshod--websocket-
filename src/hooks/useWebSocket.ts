import React from 'react';
import { useAppDispatch } from './useTypedSelector';
import { setBlurStatus, setConnectData, setErrorConnect, setFocusStatus, setIsButtonInactive } from '../services/slices/webSocketSlice';
import { IFocusData } from '../types/webSocketSlice';
import { setAllButton } from '../services/slices/buttonsSlice';

interface IConnect {
  command: string;
  block: string;
}

export const useWebSocket = (ws: WebSocket | null) => {
  const dispatch = useAppDispatch();

  const subscribe = ({command, block}: IConnect) => {
    if (ws) {
      ws.onopen = (event: Event) => {
        console.log(event)
      }

      ws.send(JSON.stringify({command, block}))
  
      ws.onmessage = (event: MessageEvent<string>) => {
        const normalizedMessage = JSON.parse(event.data);
        if (normalizedMessage.data) dispatch(setConnectData(normalizedMessage))
        if (normalizedMessage.focus) dispatch(setFocusStatus(normalizedMessage))
        if (normalizedMessage.blur) dispatch(setBlurStatus(normalizedMessage))
        if (normalizedMessage.success) {console.log('ошибка')}
        console.log(normalizedMessage)
      }

      ws.onerror = (event) => {
        console.log("onerror")
      }

      ws.onclose = (event) => {
        if (event.code !== 1000) {
          dispatch(setIsButtonInactive(true))
          dispatch(setErrorConnect(true))
        }
        dispatch(setAllButton(false));
      }
      
    }
  }

  const handleFocus = ({command, block, field}: IFocusData) => {
    if(ws) {
      ws.send(JSON.stringify({command, block, field}))
    }
  }

  const handleBlur = ({command, block, field}: IFocusData) => {
    if(ws) {
      ws.send(JSON.stringify({command, block, field}))
    }
  }

  const unsubscribe = ({command, block}: IConnect) => {
    if (ws) {
      ws.send(JSON.stringify({command, block}))
    }
  }

  return { subscribe, unsubscribe, handleFocus, handleBlur };
}
