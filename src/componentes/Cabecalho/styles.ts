import styled from "styled-components";
import vetor from '../../assets/imagens/Vector.svg'

export const BarraCabecalhoInicio = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-image: url(${vetor});
    height: 360px;
    padding: 24px;
    margin-bottom: 80px;
`

export const Subtitulo = styled.h2`
    max-width: 540px;
    text-align: center;
    font-size: 36px;
    font-weight: 900;
    padding-bottom: 16px;
`

export const BarraCabecalhoPerfil = styled.header`
    background-image: url(${vetor});
    height: 162px;
    padding: 24px;
    
    nav {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    a {
        color: inherit;
    }

    h3, p {
        font-weight: 900;
        font-size: 18px;
    }
`

export const ImagemItaliano = styled.section`
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 280px;
    color: #fff;
    position: relative;
`

export const Retangulo = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.5);
    padding: 24px;
    position: absolute;
    right: 0;
    top: 0;

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    
        span {
            font-size: 32px;
            font-weight: 100;
        }
    
        h2 {
            font-size: 32px;
            font-weight: 900;
        }
    }
`