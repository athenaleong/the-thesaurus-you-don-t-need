import React from 'react';
import {ButtonStyled, ButtonBackground, ButtonStyledRect, ButtonBackgroundRect} from './button-style'

function Button(props) {

    const {onClick, text, icon} = props
    return (
        <ButtonBackground width={props.width}>
            <ButtonStyled onClick={onClick} width={props.width}>
                {text}
            </ButtonStyled>
        </ButtonBackground>
    )
}

function IconButton(props) {

    const {onClick, icon} = props
    var text = <img src={icon}></img>

    return (
        <ButtonBackground width={props.width}>
            <ButtonStyled onClick={onClick} width={props.width}>
                {text}
            </ButtonStyled>
        </ButtonBackground>
    )
}

function TextButton(props) {

    const {onClick, icon, text} = props

    return (
        <ButtonBackgroundRect width={props.width}>
            <ButtonStyledRect onClick={onClick} width={props.width}>
                {text}
            </ButtonStyledRect>
        </ButtonBackgroundRect>
    )
}
export {TextButton, IconButton}

