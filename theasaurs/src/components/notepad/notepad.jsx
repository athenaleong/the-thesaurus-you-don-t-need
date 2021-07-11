import React from 'react';
import {NotePadDiv,NotePadInnerDiv, NotePadTextArea, NotePadIcon, Penguin} from './style'
import penguin from '../../asset/penguin.png'

function auto_grow(element) {
    element = element.target
    element.style.height = "0px";
    element.style.height = (element.scrollHeight - 59)+"px";
  }
  

function NotePad(props) {

    const {textRef, readOnly, value} = props;
    return (
    <NotePadDiv>
        <NotePadInnerDiv>
            <NotePadTextArea onInput={(element) => auto_grow(element)} maxLength="500" placeholder="Insert text here ..." ref={textRef} readOnly={readOnly}>
            </NotePadTextArea>
            <NotePadIcon>
                <p>#aorticpump</p>
                <Penguin src={penguin}/>
            </NotePadIcon>
        </NotePadInnerDiv>
    </NotePadDiv>
    )
}

function ReadOnlyNotePad(props){
    return (
        <NotePad readOnly={true} textRef={props.textRef}></NotePad>
    )
}

export {NotePad, ReadOnlyNotePad};
