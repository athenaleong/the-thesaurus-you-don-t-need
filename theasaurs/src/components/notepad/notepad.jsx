import React from 'react';
import {NotePadDiv, NotePadTextArea, NotePadIcon, Penguin} from './style'
import penguin from '../../asset/penguin.png'

function NotePad(props) {

    const {textRef} = props;
    return (
    <NotePadDiv>
     <NotePadTextArea placeholder="Insert text here ..." ref={textRef}>
     </NotePadTextArea>
    <NotePadIcon>
        <p>#aorticpump</p>
        <Penguin src={penguin}/>
    </NotePadIcon>
    </NotePadDiv>
    )
}

export {NotePad};