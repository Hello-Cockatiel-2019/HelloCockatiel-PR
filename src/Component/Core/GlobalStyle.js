import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "Quark";
        src: url('../../../../../public/fonts/Quark-Bold.otf');
    }
    div{
        font-family:"Quark";
    }

`

export default GlobalStyle