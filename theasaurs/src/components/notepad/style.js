import styled from 'styled-components';

export const NotePadTextArea = styled.textarea`
    border: none;
    border-radius: 56px;
    display: block;
    font-family: 'Gloria Hallelujah', cursive;
    font-size: 22px;
    line-height: 48px;
    margin: 2% auto;
    padding: 11px 20px 0 70px;
    resize: none;
    height: 689px;
    width: 530px;
    background-color: #F7F6E9;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    
    

    background-image:  -webkit-linear-gradient(left, transparent 49px, #F1D6D0 49px, #F1D6D0 50.5px, #CA6C70 50.5px, #CA6C70 52px, transparent 5px), -webkit-linear-gradient(top , transparent, transparent 46px,#DCDCDA 0), -webkit-linear-gradient(top , transparent, transparent 45px,#E8EAE1 0);

    -webkit-background-size:  100% 50px;
    background-size: 100% 48px;

    :focus{
    outline: none;
    }
`

