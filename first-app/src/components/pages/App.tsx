import React, { useState } from 'react';
import Lista from '../lista';
import Formulario from '../formulario';
import style from './App.module.scss';
import { Cronometro } from '../cronometro/index';
import { ITarefa } from '../../types/tarefa/tarefa';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([
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
    }*/])
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa =>({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })));
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
      />
      <Cronometro selecionado = {selecionado} />
    </div>
  );
}

export default App;
