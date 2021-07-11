import styled from 'styled-components';
import penguin from '../../asset/penguin.png'
import px2vw from "../../utils/px2vw";


export const NotePadTextArea = styled.textarea`
    border: none;
    border-radius: 56px;
    display: block;
    font-family: 'Gloria Hallelujah', cursive;
    font-size: 22px;
    line-height: 48px;
    margin: 2% auto;
    padding: 59px 20px 0 70px;
    min-height: 640px;
    width: 100%;
    background-color: #F7F6E9;
    overflow: hidden;
    resize: none;
    max-width: 100%;
    background-image:  -webkit-linear-gradient(left, transparent 49px, #F1D6D0 49px, #F1D6D0 50.5px, #CA6C70 50.5px, #CA6C70 52px, transparent 5px), -webkit-linear-gradient(top , transparent, transparent 46px,#DCDCDA 0), -webkit-linear-gradient(top , transparent, transparent 45px,#E8EAE1 0);


    -webkit-background-size:  100% 50px;
    background-size: 100% 48px;

    :focus{
    outline: none;
    }


    @media (max-width: 1024px) {
        min-height: ${px2vw(1020, 1024)};
        background-image:  -webkit-linear-gradient(left, transparent ${px2vw(49, 1024)}, #F1D6D0 ${px2vw(45, 1024)}, #F1D6D0 ${px2vw(50.5, 1024)}, #CA6C70 ${px2vw(50.5, 1024)}, #CA6C70 ${px2vw(52, 1024)}, transparent ${px2vw(5, 1024)}), -webkit-linear-gradient(top , transparent, transparent ${px2vw(46, 1024)},#DCDCDA 0), -webkit-linear-gradient(top , transparent, transparent ${px2vw(49, 1024)},#E8EAE1 0);
        line-height: ${px2vw(48, 1024)};
        background-size: 100% ${px2vw(48, 1024)};
        font-size: ${px2vw(32, 1024)};
        padding: ${px2vw(59, 1024)} ${px2vw(20, 1024)} 0 ${px2vw(70, 1024)};
        border-radius: ${px2vw(56, 1024)};
        max-width: 100%;
    }


    @media (max-width: 768px) {
        min-height: ${px2vw(800, 768)};
        background-image:  -webkit-linear-gradient(left, transparent ${px2vw(49, 768)}, #F1D6D0 ${px2vw(45, 768)}, #F1D6D0 ${px2vw(50.5, 768)}, #CA6C70 ${px2vw(50.5, 768)}, #CA6C70 ${px2vw(52, 768)}, transparent ${px2vw(5, 768)}), -webkit-linear-gradient(top , transparent, transparent ${px2vw(46, 768)},#DCDCDA 0), -webkit-linear-gradient(top , transparent, transparent ${px2vw(49, 768)},#E8EAE1 0);
        line-height: ${px2vw(48, 768)};
        background-size: 100% ${px2vw(48, 768)};
        font-size: ${px2vw(32, 768)};
        padding: ${px2vw(59, 768)} ${px2vw(20, 768)} 0 ${px2vw(70, 768)};
        border-radius: ${px2vw(56, 768)};
        max-width: 100%;
    }

`
export const Penguin = styled.img`
    width: 90px;
    height: 90px;
    border-radius: 50%;
    z-index: 10;
    padding-left: 16px;

    @media (max-width: 768px) {
        width: ${px2vw(90, 768)};
        height: ${px2vw(90, 768)};
        padding-left:  ${px2vw(16, 768)};

    }
`

export const NotePadIcon = styled.div`
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

    @media (max-width: 768px) {
        font-size: ${px2vw(24, 768)};
        padding: 0 ${px2vw(48, 768)} ${px2vw(32, 768)} 0;
    }

`
export const NotePadDiv = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
`

export const NotePadInnerDiv =  styled.div`
    position: relative;
    display: flex;
    width: ${px2vw(600)};
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 56px;



    @media (max-width: 1024px) {
        width: 90%;
    }

    @media (max-width: 768px) {
        width: 90%;
    }

    

`