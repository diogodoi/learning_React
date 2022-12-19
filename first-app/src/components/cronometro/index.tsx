import Button from "../button/index"
import { Relogio } from "./relogio"
import style from './Cronometro.module.scss'
export function Cronometro() {
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>
                escolha um card e inicie o cronômetro
            </p>
            <div className={style.relogioWrapper}>
                <Relogio/>

            </div>
                <Button texto="Começar" />
        </div>
    )
}