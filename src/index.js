import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import '../node_modules/bootstrap/scss/bootstrap.scss';
import MainLayout from './features/MainLayout';

const Main = () => (
    <React.StrictMode>
      <MainLayout />
    </React.StrictMode>
)

ReactDOM.render(
  <BrowserRouter basename='/cimis/'>
    <Main />
  </BrowserRouter>
  , document.getElementById('root')
);


