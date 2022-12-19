import React from "react";
import style from './Relogio.module.scss'

export function Relogio(){
    return(
        // o Reac frament finge ser um componente pai
        <React.Fragment>
        <span className={style.relogioNumero}> 0 </span>
        <span className={style.relogioNumero}> 0 </span>
        <span className={style.relogioDivisao}> : </span>
        <span className={style.relogioNumero}> 0 </span>
        <span className={style.relogioNumero}> 0 </span>
        </React.Fragment>
        
        )
}