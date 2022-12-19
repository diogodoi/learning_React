import React, { useState } from 'react';
import Lista from '../lista';
import Formulario from '../formulario';
import style from  './App.module.scss';
import { Cronometro } from '../cronometro/index';
import { ITarefa } from '../../types/tarefa/tarefa';

function App() {
  const [tarefas,setTarefas] = useState<ITarefa[]|[]>([
    /**{
        tarefa: 'React',
        tempo: '02:00:00',

    },
    {  
        tarefa:'JavaScript',
        tempo:'01:00:00',

    },{
        tarefa:'TypeScript',
        tempo:'01:00:00'
    }*/]);
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas = {setTarefas}  />
      <Lista tarefas = {tarefas}/>
      <Cronometro/>
    </div>
  );
}

export default App;
