
import { ITarefa } from '../../types/tarefa/tarefa';
import style from './Lista.module.scss';
import Item from "./item/item";

interface Props{
    tarefas:ITarefa[],
    selecionaTarefa: (tarefaSelecionada:ITarefa)=> void
}


function Lista({tarefas,selecionaTarefa}:Props) {

    return (
        <aside className={style.listaTarefas}>
            <h2 >
                Estudos do dia
            </h2>
            <ul>
                {tarefas.map((item)=>(
                    <Item
                    selecionaTarefa = {selecionaTarefa}
                    // outra forma é :
                    key = {item.id}
                     //tarefa = "item.tarefa"
                     // tempo ="item.tempo" /
                     {...item}/>
                ))}
               
            </ul>
        </aside>
    )
}
export default Lista;