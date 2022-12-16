import React from "react";


class Button extends React.Component {
    render(){
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
    }
}

export default Button;