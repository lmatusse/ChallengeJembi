import { createGlobalStyle } from "styled-components";
const Global=createGlobalStyle`
*{
    margin:0;
        padding:0;
}
    body{
        
        font-family:'Poppins', Sans-serif;
        background-image:url('/background.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
    #root{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    }
    `
    export default Global;
