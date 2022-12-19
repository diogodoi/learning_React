
import { ITarefa } from '../../types/tarefa/tarefa';
import style from './Lista.module.scss';
import Item from "./item/item";



function Lista({tarefas}:{tarefas:ITarefa[]}) {

    return (
        <aside className={style.listaTarefas}>
            <h2 >
                Estudos do dia
            </h2>
            <ul>
                {tarefas.map((item,idx)=>(
                    <Item
                    // outra forma é :
                    key = {idx}
                     //tarefa = "item.tarefa"
                     // tempo ="item.tempo" /
                     {...item}/>
                ))}
               
            </ul>
        </aside>
    )
}
export default Lista;