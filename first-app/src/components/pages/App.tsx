import React from 'react';
import Lista from '../lista';
import Formulario from '../formulario';
import style from  './App.module.scss';
import { Cronometro } from '../cronometro/index';

function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario></Formulario>
      <Lista></Lista>
      <Cronometro/>
    </div>
  );
}

export default App;
