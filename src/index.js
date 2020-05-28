import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import Header from './components/header';

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Routes />
  </BrowserRouter>,
  document.getElementById('root')
);
