import React from 'react';
import {SubmitButtonStyled} from './submitStyle'

function SubmitButton(props) {

    const {onClick} = props
    return (
        <SubmitButtonStyled onClick={onClick}>
            Submit
        </SubmitButtonStyled>
    )
}

export default SubmitButton

