import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box
}

body{
    font-family: 'Inter', sans-serif;
    background: #1b1b1b;
    overflow-x: hidden;
}

button{
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background:transparent;
    color: white;
    font-family: 'Inter', sans-serif;
    transition: all 0.5s ease;
    &:hover{
        background-color: #23d997;
    }
}
h2{
    font-weight: lighter;
    font-size: 4rem
}
h3{
    color: white;
}
h4{
    font-weight: bold;
    font-size: 2rem;
}
span{
    font-weight: bold;
    color:#23d997
}
a{
    font-size: 1.1rem;
}
p{
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%;
}

html{
@media (max-width: 1700px){
    font-size: 75%;
    }
    /* @media (max-width: 1300px){
    font-size: 80%;
    } */
}
`;

export default GlobalStyle;
