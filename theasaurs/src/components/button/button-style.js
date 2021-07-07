import styled from 'styled-components'

export const ButtonStyled = styled.button`
    border-radius: 32px;
    border: 2px solid black;
    background-color: white;
    width: 64px;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items:center;
    position: relative;
    left: 5px;
    bottom: 5px;
    cursor: pointer;

    :hover {
        left: 0px;
        bottom: 0px;
    }
`

export const ButtonBackground = styled.div`
    width: 64px;
    height: 64px;
    background-color: #FCCA2D;
    border-radius: 32px;
    // border: 2px solid black;

`