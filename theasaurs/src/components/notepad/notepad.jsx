import React from 'react';
import {NotePadTextArea} from './style'

function NotePad(props) {

    const {textRef} = props;
    return (
     <NotePadTextArea placeholder="Insert text here ..." ref={textRef}>
     </NotePadTextArea>
    )
}

export {NotePad};