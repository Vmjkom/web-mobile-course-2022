import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const yhteystiedot =  [
  {name: 'Arto Hellas'}
]

ReactDOM.render(
  
    <App yhteystiedot={yhteystiedot}/>,
  
  document.getElementById('root')
);


