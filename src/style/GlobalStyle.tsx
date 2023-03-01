import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: auto;
}

body {
  word-wrap: break-word;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

ul {
    list-style: none;
    list-style-position: outside;
    padding: 0;
}

input,
button,
textarea,
select {
  font: inherit;
  padding: 0;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {

  margin: 0;
}

a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

`;
export default GlobalStyle;
