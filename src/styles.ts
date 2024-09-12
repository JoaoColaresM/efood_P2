import { createGlobalStyle } from "styled-components";

export const cores = {
    principal: '#E66767',
    secundaria: '#FFEBD9',
    terciaria: '#FFF8F2',
}

export const CssGlobal = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
        text-decoration: none;
}

    body {
        background-color: ${cores.terciaria};
        color: ${cores.principal};
}

    .container {
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;
}
`