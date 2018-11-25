import { createGlobalStyle } from 'styled-components';

export const themes = {
  light: 'light',
  dark: 'dark',
};

export const dark = {
  color: '#fff',
  backgroundColor: 'black',
};

export const light = {
  color: '#000',
  backgroundColor: 'white',
};

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.backgroundColor};
  }
`;
