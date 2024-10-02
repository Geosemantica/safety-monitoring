import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';
import base from './base';
import fonts from './fonts';
import reset from './reset';
import variablesNEW from './variables.new';
import animations from './animations';
import 'react-tooltip/dist/react-tooltip.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'react-toastify/dist/ReactToastify.css';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${reset}
  ${fonts}
  ${variablesNEW}
  ${base}
  ${animations}
`;
