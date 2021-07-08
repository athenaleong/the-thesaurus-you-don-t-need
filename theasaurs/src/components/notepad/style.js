import styled from 'styled-components';
import penguin from '../../asset/penguin.png'

export const NotePadTextArea = styled.textarea`
    border: none;
    border-radius: 56px;
    display: block;
    font-family: 'Gloria Hallelujah', cursive;
    font-size: 22px;
    line-height: 48px;
    margin: 2% auto;
    padding: 59px 20px 0 70px;
    min-height: 689px;
    width: 520px;
    background-color: #F7F6E9;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    overflow: hidden;
    resize: none;


    
    background-image:  -webkit-linear-gradient(left, transparent 49px, #F1D6D0 49px, #F1D6D0 50.5px, #CA6C70 50.5px, #CA6C70 52px, transparent 5px), -webkit-linear-gradient(top , transparent, transparent 46px,#DCDCDA 0), -webkit-linear-gradient(top , transparent, transparent 45px,#E8EAE1 0);


    -webkit-background-size:  100% 50px;
    background-size: 100% 48px;

    :focus{
    outline: none;
    }
`
export const Penguin = styled.img`
    width: 90px;
    height: 90px;
    border: radius: 50%;
    z-index: 10;
    padding-left: 16px;
`

export const NotePadIcon = styled.div`
    // width: 100%;
    height: auto;
    position: absolute;
    bottom: 0px;
    right: 0px;
    z-index: 10;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 48px 32px 0;
    font-size: 24px;

`

export const NotePadDiv = styled.div`
    position: relative;
`