import React, {FC, useEffect, useState} from 'react';
import ButtonContainer from '../../components/ButtonContainer/ButtonContainer';
import Block from '../../components/Block/Block';
import Input from '../../components/UI/Input/Input';
import { BLOCK_ONE, BLOCK_THREE, BLOCK_TWO, WSS_URL } from '../../utils/constants';
import { useAppDispatch, useAppSelector } from '../../hooks/useTypedSelector';
import { useWebSocket } from '../../hooks/useWebSocket';
import { setErrorConnect, setIsButtonInactive } from '../../services/slices/webSocketSlice';
import ErrorConnect from '../../components/ErrorConnect/ErrorConnect';

const MainPage: FC = () => {
  const { buttonActiveBlockOne, buttonActiveBlockThree, buttonActiveBlockTwo } = useAppSelector(store => store.buttons);
  const { errorConnect } = useAppSelector(store => store.webSocket);
  const dispatch = useAppDispatch();
  const [ws, setWs] = useState<WebSocket | null> (null);
  const { handleFocus, handleBlur, handleSendData} = useWebSocket(ws)

  const handleConnect = () => {
    dispatch(setErrorConnect(false))
    const ws = new WebSocket(WSS_URL)
    setWs(ws)
  }

  useEffect(() => {
    if (ws && ws.readyState !== ws.CLOSED) {
      dispatch(setIsButtonInactive(false))
    } else {
      dispatch(setIsButtonInactive(true))
    }
  }, [ws])

  useEffect(() => {
    handleConnect();
  }, [])

  useEffect(() => {
    if (errorConnect) {
      setTimeout(() => {
        handleConnect()
      }, 5000)
    }
  }, [errorConnect])

  const BlockOne = (
    <Block title={BLOCK_ONE} ws={ws}>
      <Input 
        title={BLOCK_ONE}
        label='Имя'
        type='text'
        id='fname'
        placeholder='Введите имя'
        minLength={2}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onSendData={handleSendData}
      />
      <Input
        title={BLOCK_ONE}
        label='Фамилия'
        type='text'
        id='lname'
        placeholder='Введите Фамилию'
        minLength={2}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onSendData={handleSendData}
      />
    </Block>
  )

  const BlockTwo = (
    <Block title={BLOCK_TWO} ws={ws}>
      <Input
        title={BLOCK_TWO}
        label='День рождения'
        type='text' id='birthday'
        placeholder='Введите день рождения'
        min={1}
        max={31}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onSendData={handleSendData}
      />
      <Input
        title={BLOCK_TWO}
        label='Рост'
        type='number'
        id='height'
        placeholder='Введите рост'
        min={1}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onSendData={handleSendData}
      />
    </Block>
  )

  const BlockThree = (
    <Block title={BLOCK_THREE} ws={ws}>
      <Input
        title={BLOCK_THREE}
        label='Город'
        type='text'
        id='city'
        placeholder='Введите город'
        onFocus={handleFocus}
        onBlur={handleBlur}
        onSendData={handleSendData}
      />
      <Input
        title={BLOCK_THREE}
        label='Улица'
        type='text'
        id='address'
        placeholder='Введите улица'
        onFocus={handleFocus}
        onBlur={handleBlur}
        onSendData={handleSendData}
      />
      <Input
        title={BLOCK_THREE}
        label='Почтовый индекс'
        type='text'
        id='index'
        placeholder='Введите почтовый индекс'
        pattern={`^[0-9]{6}$`}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onSendData={handleSendData}
      />
    </Block>
  )

  
  return (
    <main>
      <ButtonContainer />
      {buttonActiveBlockOne && BlockOne}
      {buttonActiveBlockTwo && BlockTwo}
      {buttonActiveBlockThree && BlockThree}
      {errorConnect && <ErrorConnect />}
    </main>
  );
}

export default MainPage;