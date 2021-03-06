import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    body {
        background: #1b1b1b;
        font-family:'Inter', sans-serif;
    }
    button {
        font-weight:bold;
        font-family:'Inter', sans-serif;
        font-size:1.1.rem;
        cursor:pointer;
        padding:1rem 2rem;
        border: 2px solid #23d997;
        background:transparent;
        color:white;
        transition: all 0.4s ease-in-out;
        &:hover {
            background-color: #23d997;
            color:white;
        }
    }
    h2 {
        font-weight:lighter;
        font-size:4rem;
    }
    h3 {
        color:white;
    }
    h4 {
        font-size: 2rem;
        font-weight: bolder;
    }
    p {
        padding:3rem 0rem;
        color: #ccc;
        font-size: .8rem;
        line-height:150%;
    }
    span {
        font-weight:bold;
        color:#23d997;
    }
    a {
        font-size: 1.1.rem;
    }
`;

export default GlobalStyle;
