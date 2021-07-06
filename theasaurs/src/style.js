import styled from 'styled-components';
import {css} from 'styled-components';


const sharedStyle = css`
    font-family: 'Gloria Hallelujah', cursive;
    // margin-bottom: 16px;

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
    margin-bottom: 48px;

    p {
        margin: 0
    }
`

export const NoteBox = styled.div`
    ${sharedStyle}
`

export const LogoBox = styled.div`
    ${sharedStyle}
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 48px;
`

export const Logo= styled.img`
    width:110px;
    height: auto;
`

export const ButtonBox = styled.div`
    display: flex;
`