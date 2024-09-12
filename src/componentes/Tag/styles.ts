import styled from "styled-components";
import { cores } from "../../styles";

export const BarraDaTag = styled.div`
    background-color: ${cores.principal};
    color: ${cores.secundaria};
    font-weight: bold;
    padding: 8px;
    margin-left: 8px;
    font-size: 12px;
    font-weight: 700;
    
    a {
        color: inherit;
    }
`