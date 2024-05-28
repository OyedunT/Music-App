import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Music from './Music';
import Img from './Img';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Playsong from './Playsong';
import Songs from './Songs';
import Footer from './Footer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Music/>}/> 
      <Route path='/playing/:id' element={<Playsong/>} />
      <Route path='/song/:id' element={<Songs/>} />
     </Routes>
    </BrowserRouter>
    <Img />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
