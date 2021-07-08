import React from 'react';
import {ButtonStyled, ButtonBackground} from './button-style'

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

    var text = <img src={props.icon} style={{width:'64%'}}></img>

    return (
        <Button width='64px' text={text} {...props}></Button>
    )
}

function TextButton(props) {

    var text = <p>{props.text}</p>
    return (
        <Button {...props} width='104px' text={text}></Button>
    )
}
export {TextButton, IconButton}

