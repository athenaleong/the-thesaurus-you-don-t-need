import logo from './logo.svg';
import React, {useState, useRef, createRef} from 'react';
import { useScreenshot } from 'use-react-screenshot'
import './App.css';
import {TitleBox, DescBox, NoteBox, LogoBox, Logo, ButtonBox, FooterMessage} from './style';
import {NotePad} from './components/notepad/notepad'
import penguin from './asset/penguin.png'
import save from './asset/save.png'
import Button from './components/button/button'
import configData from './config.json'
import axios from 'axios';
import html2canvas from 'html2canvas';
import domtoimage from 'dom-to-image';

function App() {

  const [isSubmit, setIsSubmit] = useState(false)
  const textRef = useRef()
  const imageRef = createRef(null)

  
  function getImage() {
    var node = imageRef.current;
    var scale = 1
    domtoimage.toPng(node)
    .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        console.log(dataUrl)
        document.body.appendChild(img);
    })
    .catch(function (error) {
        console.error('oops, something went wrong!', error);
    });
  }

  function onSubmitClick(sentence) {
    console.log(sentence)
    axios.post(configData.SERVER_URL, 
      {"sentence": sentence}
    )
    .then(function (response) {
      textRef.current.value = response.data
    })
  }

  return (
    <div style={{display:'flex', 'alignItems':'center', 'flexDirection': 'column'}}>
      <LogoBox>
        <Logo src={penguin}/>
      </LogoBox>
      <TitleBox>
        <p>Sentence Sophiscator</p>
      </TitleBox>
      <DescBox>
        <p>Want your writing to sound smarter?</p>
        <p>Why don't you give the thesaurus a try...</p>
      </DescBox>
      <NoteBox ref={imageRef}>
        <NotePad textRef={textRef}></NotePad> 
      </NoteBox>
      <ButtonBox>
        <Button onClick={() => onSubmitClick(textRef.current.value)} text={'Submit'}>
        </Button>
        <Button onClick={()=>{}} text={<img src={save} style={{width:'64%'}}></img>}>
        </Button>
        <Button onClick={getImage} text={<img src={save} style={{width:'64%'}}></img>}>
        </Button> 
      </ButtonBox>

      <FooterMessage>Built with aortic pump by Athena</FooterMessage>
    </div>
  )
}

export default App;
