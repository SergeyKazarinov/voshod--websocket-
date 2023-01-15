import React, {FC, useEffect} from 'react';
import ButtonContainer from '../../components/ButtonContainer/ButtonContainer';
import Block from '../../components/Block/Block';
import Input from '../../components/UI/Input/Input';
import { BLOCK_ONE, BLOCK_THREE, BLOCK_TWO, WSS_URL } from '../../utils/constants';
import ErrorConnect from '../../components/ErrorConnect/ErrorConnect';
import { useWebSocket } from '../../hooks/useWebSocket';
import { useAppSelector } from '../../hooks/useTypedSelector';

const MainPage: FC = () => {
  const { buttonActiveBlockOne, buttonActiveBlockThree, buttonActiveBlockTwo } = useAppSelector(store => store.buttons);
  const { errorConnect } = useAppSelector(store => store.webSocket);
  const { connect, subscribe, unsubscribe, handleFocus, handleBlur, handleSendData } = useWebSocket();

  const handleConnect = () => {
    connect(WSS_URL);
  }

  useEffect(() => {
    handleConnect();
  }, [])

  useEffect(() => {
    if (errorConnect) {
      setInterval(() => {
        handleConnect()
      }, 5000)
    }
  }, [errorConnect])

  const BlockOne = (
    <Block title={BLOCK_ONE} subscribe={subscribe} unsubscribe={unsubscribe}>
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
    <Block title={BLOCK_TWO} subscribe={subscribe} unsubscribe={unsubscribe}>
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
    <Block title={BLOCK_THREE} subscribe={subscribe} unsubscribe={unsubscribe}>
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