import { createGlobalStyle } from 'styled-components';

export const themes = {
  light: 'light',
  dark: 'dark',
};

export const dark = {
  main: {
    color: '#fff',
    backgroundColor: '#10171E',
  },
  blockquote: {
    color: 'rgba(255,255,255, 0.5)',
    border: 'rgba(255,255,255,0.3)',
  },
  bio: {
    textColor: '#fff',
    backgroundColor: '#1d2731',
  },
};

export const light = {
  main: {
    color: '#000',
    backgroundColor: '#fff',
  },
  blockquote: {
    color: 'rgba(0,0,0,0.5)',
    border: 'rgba(0,0,0,0.3)',
  },

  bio: {
    textColor: '#000',
    backgroundColor: '#EEEEEE',
  },
};

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => props.theme.main.color};
    background-color: ${props => props.theme.main.backgroundColor};
  }
`;
