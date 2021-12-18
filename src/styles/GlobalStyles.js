import { createGlobalStyle } from "styled-components";
import { css } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root{
    --primary:#F7F5F7;
    --teritary:#97D4E6;
    --secondary:#F4E15E;
    --red:#B62D3D;
    --black:#3B4C68;
}
*{
    box-sizing:border-box;
    padding:0;
    margin:0;
}
html{
    font-size: 100%;
}
body{
    font-family: 'Roboto', sans-serif;
    background-color: var(--primary);
    font-size:1.12rem;
   
}
h1,h2,h3,h4,h5,h6{
    font-family: 'Twinkle Star', cursive;
        color: var(--black);
    margin: 1rem 0;
     
}

.btn{
    background: var(--secondary);
    color:var(--black);
    &:hover{
        background: var(--teritary);
        color:var(--black);
  }
}

`;
export default GlobalStyles;

//commonstyle
export const CommonStyle = css`
  width: 18rem;
  box-shadow: 0 3px 3px var(--black);
`;
//common style one
export const CommonStyleOne = css`
  display: flex;
  justify-content: space-between;
`;
