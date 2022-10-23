import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Content from './Components/Content/Content';
import Footer from './Components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom'
import Task from './Service/Task';
import TaskProp from './Service/TaskProp';
import Auth from './Components/Auth/Auth';
import { ToastContainer } from 'react-toastify';

interface AppProps {
}

const App: React.FC<AppProps> = ({ }) => {
  const [sidebar, setSidebar] = useState<boolean>(true);
  const [isAuthorized, setAuthorized] = useState(false);
  const app = isAuthorized ?
    (
      <>
        <Header toggleSidebar={() => setSidebar(!sidebar)} />
        <div className="app-content-wrapper">
          <Navbar isActive={sidebar} />
          <Content />
        </div>
      </>
    ) : <Auth />;
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <>{app}</>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </BrowserRouter >
  );
}

export default App;
