import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/scss/main.scss';
import Header from './blocks/header/header';
import Content from './blocks/content/content';
import Footer from './blocks/footer/footer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(
  <React.StrictMode>
    <Header/>
    <Content/>
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
