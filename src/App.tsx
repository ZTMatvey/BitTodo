import React, {useState} from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Content from './Components/Content/Content';
import Footer from './Components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom'
import Task from './Service/Task';
import TaskProp from './Service/TaskProp';

interface AppProps{
}

const App: React.FC<AppProps> = ({})=> {
  const [sidebar, setSidebar] = useState<boolean>(true);
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header toggleSidebar={()=> setSidebar(!sidebar)}/>
        <div className="app-content-wrapper">
          <Navbar isActive={sidebar} />
          <Content/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
