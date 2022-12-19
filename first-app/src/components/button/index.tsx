import React from "react";
import  style from './Botao.module.scss';

class Button extends React.Component<{texto:string}> {
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
                {this.props.texto}
            </button>
        )
    }
}

export default Button;