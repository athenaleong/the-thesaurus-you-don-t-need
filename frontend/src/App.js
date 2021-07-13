import logo from './logo.svg';
import React, {useState, useRef, createRef} from 'react';
import { useScreenshot } from 'use-react-screenshot'
import './App.css';
import configData from './config.json'
import axios from 'axios';
import domtoimage from 'dom-to-image';
import {trackPromise} from 'react-promise-tracker'

//icons
import penguin from './asset/penguin.png'
import save from './asset/save.png'
import repeat from './asset/repeat.png'
import tick from './asset/tick.png'
import rocket from './asset/rocket.png'

//components
import {Body, TitleBox, DescBox, NoteBox, LogoBox, Logo, ButtonBox, FooterMessage} from './style';
import {NotePad, ReadOnlyNotePad} from './components/notepad/notepad'
import {TextButton, IconButton} from './components/button/button'
import {Spinner} from './components/spinner/spinner'

function App() {

  const [isSubmit, setIsSubmit] = useState(false)
  const [isOutputDisplay, setIsOutputDisplay] = useState(true)
  const [original, setOriginal] = useState()
  const [output, setOutput] = useState()

  //Track Status of Promise
  const [isLoading, setIsLoading] = useState(false)

  // Referece for Original NotePad
  const inputRef = useRef()

  const resultRef = useRef()
  const imageRef = createRef(null)


  function getImage() {
    var node = imageRef.current;
    var scale = 1
    domtoimage.toPng(node)
    .then(function (dataUrl) {
      var link = document.createElement('a');
      link.download = 'aortic-pump.jpeg';
      link.href = dataUrl;
      link.click();
    })
    .catch(function (error) {
        console.error('oops, something went wrong!', error);
    });
  }

  function onSubmitClick(sentence) {
    if (sentence != "")
     { setIsLoading(true)
      axios.post(configData.SERVER_URL, 
        {"sentence": sentence}
      )
      .then(function (response) {
        setIsLoading(false);
        setOriginal("Too sophiscated for you? \n What I really meant is... \n \n" + sentence);
        setOutput(response.data)
        setIsSubmit(true);
        resultRef.current.value = response.data
      })}
  }

  function onToggleClick() {
    resultRef.current.value = isOutputDisplay? original : output
    setIsOutputDisplay(!isOutputDisplay)
  }

  function onResetClick() {
    setIsSubmit(false);
  }

  return (
    <Body>

      <LogoBox>
        <Logo src={penguin}/>
      </LogoBox>

      <TitleBox>
        <p>Sentence Sophisticator</p>
      </TitleBox>

      <DescBox>
        <p>Want your writing to sound smarter?</p>
        <p>Why don't you give the thesaurus a try...</p>
      </DescBox>

    
      {!isSubmit && !isLoading &&
        <NoteBox ref={imageRef}>
          <NotePad textRef={inputRef}></NotePad> 
        </NoteBox>
      }
      {isSubmit && !isLoading &&
        <NoteBox ref={imageRef}>
          <ReadOnlyNotePad textRef={resultRef}></ReadOnlyNotePad>
        </NoteBox>
      }

      {!isLoading &&
        <ButtonBox>
          <IconButton onClick={() => isSubmit? onResetClick() : onSubmitClick(inputRef.current.value)} icon={isSubmit? repeat:rocket}>
          </IconButton>
          {/* {isSubmit && <Button onClick={()=>{}} icon={save}></Button>}    */}
          {isSubmit && <IconButton onClick={getImage} icon={save}></IconButton>}
          {isSubmit && <TextButton onClick={onToggleClick} text={isOutputDisplay? "Show Original": "Show New"}></TextButton>}
        </ButtonBox>
      }
      {isLoading && <Spinner/>}

      <FooterMessage>
        <p>Built with aortic pump by Athena</p>
        <p>Inspired by The one with the thesaurus</p>
        </FooterMessage>
      </Body>
  )
}

export default App;
