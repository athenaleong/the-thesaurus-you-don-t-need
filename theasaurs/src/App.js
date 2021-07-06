import logo from './logo.svg';
import React, {useState, useRef} from 'react';
import './App.css';
import {TitleBox, DescBox, NoteBox, LogoBox, Logo} from './style';
import {NotePad} from './components/notepad/notepad'
import penguin from './asset/penguin.png'
import SubmitButton from './components/button/submit'

function App() {

  // const [text, setText] = useState(null)
  const textRef = useRef()

  function onSubmitClick() {

  }

  return (
    <div style={{display:'flex', 'align-items':'center', 'flex-direction': 'column'}}>
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
        <NotePad textRef={textRef}></NotePad>
      </NoteBox>

      <SubmitButton onClick={() => console.log(textRef.current.value)}>
      </SubmitButton>
      <p>Built with aortic pump by Athena</p>
    </div>
  )
}

export default App;
