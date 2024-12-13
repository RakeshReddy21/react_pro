import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Portfolio from './portfolio/portfolio';
// import Resume from './Resume/resume';
// import Navbar from './Resume/navbar';
// import Header from './Resume/home';
// import Btn from './Resume/button'
// import ADD from './addcart/addcart'
// import Hello from './tasks/routes'; 
import Intro from './tasks/intro';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Intro/>
    {/* <Portfolio/> */}
    {/* <Navbar/> */}
    {/* <Header/> */}
    {/* <Resume/> */}
    {/* <Hello/> */}
    {/* <Btn/> */}
    {/* <ADD/> */}
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
