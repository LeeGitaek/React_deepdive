import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppXY from './AppXY';
import AppMentor from './AppMentor';
import AppForm from './AppForm';
import AppCard from './AppCard';
import AppTheme from './AppTheme';
import AppMentorsButton from './AppMontorsButton';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppForm />
    <AppMentor />
    <AppMentorsButton />
    <AppCard /> 
    {/* <AppTheme /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
