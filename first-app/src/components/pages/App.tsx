import React from 'react';
import Lista from '../lista';
import Formulario from '../formulario';
import style from  './App.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario></Formulario>
      <Lista></Lista>
    </div>
  );
}

export default App;
