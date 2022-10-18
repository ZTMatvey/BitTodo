import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Content from './Components/Content/Content';
import Footer from './Components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom'
import Task from './Service/Task';

interface AppProps{
  tasks: Task[];
}

const App: React.FC<AppProps> = ({tasks})=> {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <div className="app-content-wrapper">
          <Navbar />
          <Content tasks={tasks}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
