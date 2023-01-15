import React, { useRef } from 'react';
import { useAppDispatch } from './useTypedSelector';
import { setBlurStatus, setConnectData, setConnected, setErrorConnect, setFocusStatus, setIsButtonInactive } from '../services/slices/webSocketSlice';
import { IFocusData } from '../types/webSocketSlice';
import { setAllButton } from '../services/slices/buttonsSlice';
import { IConnect, ISendMessage } from '../types/IWebSocketData';

export const useWebSocket = () => {
  const ws = useRef<WebSocket | null>(null);

  const dispatch = useAppDispatch();

  const connect = (url: string) => {
    ws.current = new WebSocket(url);

    ws.current.onopen = (event: Event) => {
      dispatch(setIsButtonInactive(false))
      dispatch(setErrorConnect(false))
      dispatch(setConnected(true))
    }

    ws.current.onmessage = (event: MessageEvent<string>) => {
      const normalizedMessage = JSON.parse(event.data);
      if (normalizedMessage.data) dispatch(setConnectData(normalizedMessage))
      if (normalizedMessage.focus) dispatch(setFocusStatus(normalizedMessage))
      if (normalizedMessage.blur) dispatch(setBlurStatus(normalizedMessage))
      console.log(normalizedMessage)
    }

    ws.current.onerror = (event) => {
      console.log("onerror", event)
      dispatch(setErrorConnect(true))
    }

    ws.current.onclose = (event) => {
      if(event.code !== 1000) {
        dispatch(setErrorConnect(true))
      }

      dispatch(setIsButtonInactive(true))
      dispatch(setAllButton(false));
      console.log('onclose', event)
    }

  }

  const subscribe = ({command, block}: IConnect) => {
    if (ws.current) {
      ws.current.send(JSON.stringify({command, block}))
    }
  }

  const handleFocus = ({command, block, field}: IFocusData) => {
    if(ws.current) {
      ws.current.send(JSON.stringify({command, block, field}))
    }
  }

  const handleBlur = ({command, block, field}: IFocusData) => {
    if(ws.current) {
      ws.current.send(JSON.stringify({command, block, field}))
    }
  }

  const unsubscribe = ({command, block}: IConnect) => {
    if (ws.current) {
      ws.current.send(JSON.stringify({command, block}))
    }
  }

  const handleSendData = ({command, block, valueType, value}: ISendMessage) => {
    if(ws.current) {
      ws.current.send(JSON.stringify({command, block, data: {[valueType]: value}}))
    }
  }

  return { connect, subscribe, unsubscribe, handleFocus, handleBlur, handleSendData };
}
