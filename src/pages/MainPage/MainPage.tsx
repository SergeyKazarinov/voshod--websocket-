import React, {FC} from 'react';
import ButtonContainer from '../../components/ButtonContainer/ButtonContainer';
import Block from '../../components/Block/Block';
import Input from '../../components/UI/Input/Input';

interface IMainPageProps {
  
}

const MainPage: FC<IMainPageProps> = () => {
  return (
    <main>
      <ButtonContainer />
      <Block title='Блок 1'>
        <Input label='Имя' type='text' id='name' placeholder='Введите имя'minLength={2}/>
        <Input label='Фамилия' type='text' id='lastName' placeholder='Введите Фамилию' minLength={2}/>
      </Block>

      <Block title='Блок 2'>
        <Input label='День рождения' type='number' id='birthday' placeholder='Введите день рождения' min={1} max={31}/>
        <Input label='Рост' type='number' id='height' placeholder='Введите рост' min={1}/>
      </Block>

      <Block title='Блок 3'>
        <Input label='Город' type='text' id='city' placeholder='Введите город'/>
        <Input label='Улица' type='text' id='street' placeholder='Введите улица'/>
        <Input label='Почтовый индекс' type='text' id='index' placeholder='Введите почтовый индекс' pattern={`\d [0-9][0-9][0-9][0-9][0-9][0-9]`}/>
      </Block>
    </main>
  );
}

export default MainPage;