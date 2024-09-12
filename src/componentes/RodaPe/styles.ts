import styled from "styled-components";
import {cores} from '../../styles'

export const BarraRodaPe = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: ${cores.secundaria};
    margin-top: 120px;

    img {
        margin-top: 40px;
    }
`

export const RedesSociais = styled.div`
    display: flex;

    img {
        margin-left: 8px;
    }
`

export const Aviso = styled.p`
    font-size: 10px;
    margin-top: 80px;
    margin-bottom: 40px;
    max-width: 480px;
    text-align: center;
    font-weight: 400;
`