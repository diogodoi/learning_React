import React from "react";
import style from './Lista.module.scss';
import Item from "./item/item";

function Lista() {
    const tarefas = [
        {
            tarefa: 'React',
            tempo: '02:00:00',

        },
        {  
            tarefa:'JavaScript',
            tempo:'01:00:00',

        },{
            tarefa:'TypeScript',
            tempo:'01:00:00'
        }]
    return (
        <aside className={style.listaTarefas}>
            <h2>
                Estudos do dia
            </h2>
            <ul>
                {tarefas.map((item,idx)=>(
                    <Item
                    // outra forma é :{...item}
                    key = {idx}
                     tarefa = "item.tarefa"
                     tempo ="item.tempo" />
                ))}
               
            </ul>
        </aside>
    )
}
export default Lista;