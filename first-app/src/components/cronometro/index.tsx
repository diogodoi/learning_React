import Button from "../button/index"
import { Relogio } from "./relogio"
import style from './Cronometro.module.scss'
import { tempoParaSegundos } from "../../common/utils/time"
import { ITarefa } from "../../types/tarefa/tarefa"
import { useState } from "react"

interface Props{
    selecionado: ITarefa | undefined
}

export function Cronometro({selecionado}:Props) {
    const [ tempo,setTempo] = useState<number>();
    if(selecionado?.tempo){
        setTempo(tempoParaSegundos(selecionado.tempo));
    }

    console.log('conversao: ', tempoParaSegundos('01:01:01'))
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>
                escolha um card e inicie o cronômetro
                Tempo:{tempo}
            </p>
            <div className={style.relogioWrapper}>
                <Relogio/>

            </div>
                <Button texto="Começar" />
        </div>
    )
}