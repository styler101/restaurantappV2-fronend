import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
 *{
  padding:0;
  margin:0;
  outline:0;
  box-sizing: border-box;
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
 }

 html{
  font-size: 62.5%;
}

html, body, #root{
  min-height: 100%;
}

body{
  font-size: 1.6rem;
}

input, button{
  font-size:1.6rem;
}

a{
  text-decoration: none;
}

button{
  cursor: pointer;
}

ul{
  list-style: none;
}
`
