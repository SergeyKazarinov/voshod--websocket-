import React, {FC} from 'react';
import logo from './logo.svg';
import MainPage from '../../pages/MainPage/MainPage';
import Header from '../Header/Header';

interface IAppProps {
  
}

const App: FC<IAppProps> = () => {
  return (
    <>
      <Header />
      <MainPage />
    </>
    );
}

export default App;
