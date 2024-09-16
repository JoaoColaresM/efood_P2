import styled from "styled-components";
import { cores } from "../../styles";

export const ModalDiv = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: none;
    align-items: center;
    justify-content: center;

    &.visivel {
    display: flex;
    }

    .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0, 0.73);
    }
`

export const CartaoModal = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 32px;
    background-color: ${cores.principal};
    width: 1024px;
    z-index: 1;
`

export const ImgModal = styled.div`
    margin-right: 24px;

    img {
        width: 280px;
        height: 280px;
        object-fit: cover;
    }
`

export const InfosModal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: ${cores.secundaria};
    max-width: 100%;

    h2 {
        font-size: 18px;
        font-weight: 900;
        margin-bottom: 16px;
    }

    p, span {
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 16px;
    }
`

export const BotaoModal = styled.button`
    font-size: 14px;
    font-weight: 700;
    color: ${cores.principal};
    padding: 4px;
    max-width: 218px;
    border: none;
    border-radius: none;
    cursor: pointer;
`

export const XFechar = styled.div`
    cursor: pointer;

    img {
        width: 16px;
        height: 16px;
        object-fit: cover;
    }
`