import React from "react";
import  style from './Botao.module.scss';

interface Props{
    type?:"button" | "submit" | "reset" | undefined,
    texto:string,
    onClick?:()=>void
}


function Button({onClick,type,texto}:Props){
    return (
        <button onClick={onClick} type={type} className= {style.botao}>
            {texto}
        </button>
    )

}
/** 
class Button1 extends React.Component<{
    type?:"button" | "submit" | "reset" | undefined,
    texto:string,
    onClick?:()=>void}> {
    render(){
        const {type = "button",onClick} = this.props
        /** Utilizando o inline style 
        const color = 'red';
        
        const isActivate = true;
        const styles = {
            backgroundColor: isActivate ? 'blue' : 'green'
        }
        return (
            <button style = {styles}>
                Botão
            </button>
        )
        
        return (
            <button onClick={onClick} type={type} className= {style.botao}>
                {this.props.texto}
            </button>
        )
    }
}*/


export default Button;