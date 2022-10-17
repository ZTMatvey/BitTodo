import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Content from './Components/Content/Content';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Navbar/>
      <Content/>
    </div>
  );
}

export default App;
