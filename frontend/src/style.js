import styled from 'styled-components';
import {css} from 'styled-components';
import px2vw from "./utils/px2vw";

const sharedStyle = css`
    font-family: 'Gloria Hallelujah', cursive;
    // margin-bottom: 16px;
`

export const Body = styled.div`
    display: flex;
    align-items': center;
    flex-direction: column;
    width: 100vw;

`

export const LogoBox = styled.div`
    ${sharedStyle}
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: ${px2vw(56)};;
`

export const Logo= styled.img`
    width:${px2vw(120)};
    height: ${px2vw(120)};

    @media (max-width: 1024px) {
        width: ${px2vw(120, 1024)};
        min-height: ${px2vw(120, 1024)};
        height: 100%;
    }

    @media (max-width: 768px) {
        width: ${px2vw(120, 768)};
        min-height: ${px2vw(120, 768)};
        height: 100%;
    }
    
    
`

export const TitleBox = styled.div`
    ${sharedStyle}
    display: flex;
    font-size: ${px2vw(52)};
    justify-content: center;

    p {
        margin: 0;
        line-height: normal;
        text-align:center;
    }

    @media (max-width: 1024px) {
        font-size: ${px2vw(72, 1024)};
    }

    @media (max-width: 768px) {
        font-size: ${px2vw(64, 768)};
    }

    
`

export const DescBox = styled.div`
    ${sharedStyle}
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: ${px2vw(20)};
    margin-bottom: 24px;

    p {
        margin: 0
    }

    @media (max-width: 1024px) {
        font-size: ${px2vw(32, 1024)};
    }

    @media (max-width: 768px) {
        font-size: ${px2vw(28, 768)};
    }

   
`

export const NoteBox = styled.div`
    ${sharedStyle}
    padding: 24px 24px 36px 24px;
    display: flex;
    flex-direction: row;
    justify-content:space-evenly
`

export const ButtonBox = styled.div`
    display: flex;
    margin-bottom: 48px;
    width:100%;
    justify-content: center;

    div {
        margin-left: 14px;
        margin-right: 14px;

        // &:nth-child(1) {
        //     transform: rotate(12deg)
        // }

        // &:nth-child(3) {
        // transform: rotate(-12deg)
        // }

    }
`

export const FooterMessage = styled.p`
    ${sharedStyle}
    margin-bottom: 72px;
    font-size: ${px2vw(20)};


    p {
        text-align:center;
        margin: 0;
    }

    @media (max-width: 1024px) {
        p {
        font-size: ${px2vw(32, 1024)};
    }

    @media (max-width: 786px) {
        font-size: ${px2vw(32, 786)};
    }
    
`
