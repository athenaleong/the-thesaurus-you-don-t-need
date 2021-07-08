import styled from 'styled-components';
import {css} from 'styled-components';


const sharedStyle = css`
    font-family: 'Gloria Hallelujah', cursive;
    // margin-bottom: 16px;
`

export const LogoBox = styled.div`
    ${sharedStyle}
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 56px;
`

export const Logo= styled.img`
    width:110px;
    height: 110px;
`

export const TitleBox = styled.div`
    ${sharedStyle}
    display: flex;
    justify-content: center;
    font-size: 52px;

    p {
        margin: 0
    }
`

export const DescBox = styled.div`
    ${sharedStyle}
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 20px;
    margin-bottom: 24px;

    p {
        margin: 0
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
    
`