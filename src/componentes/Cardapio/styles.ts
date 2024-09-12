import styled from "styled-components";
import { cores } from "../../styles";

export const OpcaoMenu = styled.div`
    width: 100%;
    padding: 8px;
    background-color: ${cores.principal};
`

export const ImagemMenu = styled.div`
    width: 304px;
    height: 167px;
    background-repeat: no-repeat;
    background-size: cover;
    object-fit: cover;
`

export const Titulo = styled.h3`
    font-weight: 900;
    font-size: 16px;
    padding: 8px 0;
    color: ${cores.secundaria}
`

export const Descricao = styled.p`
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 8px;
    color: ${cores.secundaria}
`

export const BotaoMenu = styled.button`
    background-color: ${cores.secundaria};
    color: ${cores.principal};
    width: 100%;
    padding: 4px;
    font-weight: 700;
    font-size: 14px;
    border: none;
    cursor: pointer;
`