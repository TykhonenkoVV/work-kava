import { css } from '@emotion/react';
import { theme } from './theme';

import ttfRegular from '../fonts/RobotoMono-Regular.ttf';
import ttfBold from '../fonts/RobotoMono-Bold.ttf';
import eotRegular from '../fonts/RobotoMono-Regular.eot';
import eotBold from '../fonts/RobotoMono-Bold.eot';
import woffRegular from '../fonts/RobotoMono-Regular.woff';
import woffBold from '../fonts/RobotoMono-Bold.woff';
import woff2Regular from '../fonts/RobotoMono-Regular.woff2';
import woff2Bold from '../fonts/RobotoMono-Bold.woff2';
import svgRegular from '../fonts/RobotoMono-Regular.svg';
import svgBold from '../fonts/RobotoMono-Bold.svg';
import ttfImpact from '../fonts/impact.ttf';

export const GlobalStyles = css`
  @font-face {
    font-family: 'Roboto Mono';
    font-weight: 400;
    font-style: normal;
    font-display: swap;
    src: url('${eotRegular}');
    src: url('${eotRegular}?#iefix') format('embedded-opentype'),
      url('${woff2Regular}') format('woff2'),
      url('${woffRegular}') format('woff'),
      url('${ttfRegular}') format('truetype'),
      url('${svgRegular}#RobotoMono-Regular') format('svg');
  }

  @font-face {
    font-family: 'Roboto Mono';
    font-weight: 700;
    font-style: normal;
    font-display: swap;
    src: url('${eotBold}');
    src: url('${eotBold}?#iefix') format('embedded-opentype'),
      url('${woff2Bold}') format('woff2'), url('${woffBold}') format('woff'),
      url('${ttfBold}') format('truetype'),
      url('${svgBold}#RobotoMono-Bold') format('svg');
  }

  @font-face {
    font-family: 'Impact';
    font-weight: 400;
    font-style: normal;
    src: url('${ttfImpact}') format('truetype');
    font-display: swap;
  }

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    min-height: 100vh;
    margin: 0;
    font-family: 'Roboto Mono', sans-serif;
    font-style: normal;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.primary};
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  main {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
  }

  ul,
  ol {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  button {
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;
