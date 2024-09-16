import styled from "styled-components"
import {cores} from '../../styles'

export const Cartao = styled.div`
    display: block;
    background-color: #fff;
    padding: 8px;
    border: 1px solid ${cores.principal};
    border-top: 0;
    position: relative;
`

export const Imagem = styled.div`
    width: 472px;
    height: 217px;
    background-repeat: no-repeat;
    background-size: cover;
    object-fit: cover;
`

export const TituloNota = styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    font-size: 16px;
    margin-top: 8px;
`

export const Estrela = styled.div`
    display: flex;
    justify-content: space-between;

    img {
        margin-left: 8px;
    }
`

export const Descricao = styled.p`
    font-size: 14px;
    font-weight: 400;
    text-align: left;
    margin-top: 16px;
`

export const Tags = styled.div`
    position: absolute;
    top: 16px;
    right: 16px;
    display: flex;
    flex-direction: row;
`

export const Botao = styled.button`
    padding: 4px 6px;
    margin-top: 16px;
    background-color: ${cores.principal};
    color: ${cores.secundaria};
    font-size: 14px;
    font-weight: 700;
    border: none;
    cursor: pointer;
`