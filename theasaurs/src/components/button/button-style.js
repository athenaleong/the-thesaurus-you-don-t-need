import styled from 'styled-components'
import px2vw from "../../utils/px2vw";


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
    font-size: 18px;
    font-family: 'Gloria Hallelujah', cursive;

    :hover {
        left: 0px;
        bottom: 0px;
    }

    @media (max-width: 1025px) {
        width: ${px2vw(82, 1024)};
        height: ${px2vw(82, 1024)};

        img {
            width: 84%;
        }
    }

    @media (min-width: 1024px) {
        img {
            width: 64%;
        }
    }

    @media (max-width: 768px) {
        width: ${px2vw(82, 768)};
        height: ${px2vw(82, 768)};

        img {
            width: 84%;
        }
    }
`

export const ButtonStyledRect = styled(ButtonStyled)`
    width: auto;
    height: 64px;


    @media (max-width: 1024px) {
        width: auto;
        height: ${px2vw(82, 1024)};
        font-size: ${px2vw(24, 1024)};

    }

    @media (max-width: 768px) {
        width: auto;
        height: ${px2vw(82, 768)};
        font-size: ${px2vw(24, 768)};

    }
`

export const ButtonBackground = styled.div`
    width: 64px;
    height: 64px;
    background-color: #FCCA2D;
    border-radius: 32px;
    // border: 2px solid black;


    @media (max-width: 1024px) {
        width: ${px2vw(82, 1024)};
        height: ${px2vw(82, 1024)};
    }

    @media (max-width: 768px) {
        width: ${px2vw(82, 768)};
        height: ${px2vw(82, 768)};
    }
`

export const ButtonBackgroundRect = styled(ButtonBackground)`
    width: auto;

    @media (max-width: 1024px) {
        width: auto;
        height: ${px2vw(82, 1024)};

    }

    @media (max-width: 768px) {
        width: auto;
        height: ${px2vw(82, 768)};
    }
`
