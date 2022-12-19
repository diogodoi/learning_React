import React, { useState } from 'react';
import Button from '../button';
import style from './Formulario.module.scss';

import { ITarefa } from '../../types/tarefa/tarefa';
import { v4 as uuidv4 } from 'uuid';

interface Props {
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}




function Formulario({ setTarefas }: Props) {
    const [tarefa, setTarefa] = useState("");
    const [tempo, setTempo] = useState("00:00");
    function adicionarTarefa(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setTarefas(
            tarefasAntigas =>
                [
                    ...tarefasAntigas,
                    {
                        tarefa,
                        tempo,
                        selecionado: false,
                        completado: false,
                        id: uuidv4(),
                    }
                ]);
        setTarefa('');
        setTempo('00:00');
    }

    return (
        <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor='tarefa' >
                    Adicione um novo estudo
                </label>
                <input
                    type="text"
                    name="tarefa"
                    value={tarefa}
                    onChange={event => setTarefa(event.target.value)}
                    id="tarefa"
                    placeholder="O que você quer estudar?"
                    required
                />
            </div >
            <div className={style.inputContainer}>
                <label htmlFor='tempo'>
                    Tempo
                </label>
                <input
                    type="time"
                    step="1"
                    name="tempo"
                    value={tempo}
                    onChange={event => setTempo(event.target.value)}
                    id="tempo"
                    min="00:00:00"
                    max="01:30:00" />
            </div>
            <Button
                type="submit"
                texto="Adicionar"
            />
        </form>
    )
}


/**
class Formulario1 extends React.Component<{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}> {
    state = {
        tarefa: "",
        tempo: "00:00"
    }
    adicionarTarefa(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        this.props.setTarefas(
            tarefasAntigas => 
            [
                ...tarefasAntigas, 
                { 
                    ...this.state,
                    selecionado:false,
                    completado:false,
                    id:uuidv4()
                }
            ]);
        //console.log('state: ',this.state);
        this.setState({
            tarefa:"",
            tempo:"00:00"
        })
    }
    render() {
        return (
            <form className={style.novaTarefa} onSubmit={
                this.adicionarTarefa.bind(this)
            }>
                <div className={style.inputContainer}>
                    <label htmlFor='tarefa' >
                        Adicione um novo estudo
                    </label>
                    <input
                        type="text"
                        name="tarefa"
                        value={this.state.tarefa}
                        onChange={event => this.setState({ ...this.state, tarefa: event.target.value })}
                        id="tarefa"
                        placeholder="O que você quer estudar?"
                        required
                    />
                </div >
                <div className={style.inputContainer}>
                    <label htmlFor='tempo'>
                        Tempo
                    </label>
                    <input
                        type="time"
                        step="1"
                        name="tempo"
                        value={this.state.tempo}
                        onChange={event => this.setState({ ...this.state, tempo: event.target.value })}
                        id="tempo"
                        min="00:00:00"
                        max="01:30:00" />
                </div>
                <Button
                    type= "submit"
                    texto="Adicionar"
                />
            </form>
        )
    }
}
*/
export default Formulario;