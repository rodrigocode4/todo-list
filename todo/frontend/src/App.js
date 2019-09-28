import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css'
import { BrowserRouter } from 'react-router-dom'

import Menu from './components/Menu';
import Routes from './Routes'

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Menu />
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;