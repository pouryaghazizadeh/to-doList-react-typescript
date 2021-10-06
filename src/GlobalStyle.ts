import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
}
.App{
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
background-color: #2f74c0 ;

}
.title{
    text-transform: uppercase;
    font-size: 40px;
    margin: 30px 0;
    color: #2fff;
    z-index:1;
    align-items: center;
}
@media(max-width:800){
    .title{
        margin: 15px 0;
        font-size: 35px;
    }
}
`