import { css } from 'styled-components';

const reset = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
    padding: 0;
    font: inherit;
  }
  ul,
  ol {
    list-style: none;
  }
  html {
    scroll-behavior: smooth;
  }
  html:focus-within {
    scroll-behavior: smooth;
  }
  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
  }
  a {
    text-decoration: inherit;
    color: inherit;
  }
  img,
  picture,
  svg {
    display: block;
  }
`;

export default reset;
