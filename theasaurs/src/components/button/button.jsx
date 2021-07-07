import React from 'react';
import {ButtonStyled, ButtonBackground} from './button-style'

function Button(props) {

    const {onClick, text} = props
    return (
        <ButtonBackground>
            <ButtonStyled onClick={onClick}>
                {text}
            </ButtonStyled>
        </ButtonBackground>
    )
}

export default Button

