import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "Quark";
        src: url('/fonts/Quark-Bold.otf');
    }
    body{
        font-family:"Quark";
    }

`

export default GlobalStyle