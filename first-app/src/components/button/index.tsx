import React from "react";
import  style from './Botao.module.scss';

class Button extends React.Component {
    render(){
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
        */
        return (
            <button className= {style.botao}>
                Botão
            </button>
        )
    }
}

export default Button;