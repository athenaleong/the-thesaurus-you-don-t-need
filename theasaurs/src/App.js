import logo from './logo.svg';
import React, {useState, useRef} from 'react';
import './App.css';
import {TitleBox, DescBox, NoteBox, LogoBox, Logo, ButtonBox} from './style';
import {NotePad} from './components/notepad/notepad'
import penguin from './asset/penguin.png'
import SubmitButton from './components/button/submit'
import configData from './config.json'
import axios from 'axios';



function App() {

  const [isSubmit, setIsSubmit] = useState(false)
  const textRef = useRef()


  function onSubmitClick(sentence) {
    axios.post(configData.SERVER_URL, 
      {headers: {"Access-Control-Allow-Origin": '*'}},
      {sentence: sentence }
    )
    .then(function (response) {
      console.log(response)
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
      <NoteBox>
        {!isSubmit && 
        <NotePad textRef={textRef}></NotePad> }
      </NoteBox>
      <ButtonBox>
        {!isSubmit && 
          <SubmitButton onClick={() => onSubmitClick(textRef.current.value)}>
          </SubmitButton>}
        {isSubmit}
      </ButtonBox>

      <p>Built with aortic pump by Athena</p>
    </div>
  )
}

export default App;
