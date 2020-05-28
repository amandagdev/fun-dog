import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import Header from './components/header';
import Menu from './components/menu';

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Menu />
    <Routes />
  </BrowserRouter>,
  document.getElementById('root')
);
