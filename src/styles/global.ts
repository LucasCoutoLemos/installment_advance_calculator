import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root{
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
    --color-white-primary: #fff;
    --color-blue-primary:  #219ebc
    --color-gray: #d3d3d3
}
* {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    font-family: 'Ubuntu', sans-serif;
    }
`;