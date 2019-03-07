import { createGlobalStyle } from 'styled-components';

export const themes = {
  light: 'light',
  dark: 'dark',
};

export const dark = {
  main: {
    color: '#fff',
    primaryBGColor: '#10171E',
    secondaryBGColor: '#1C2938',
    shadowColor: '#111010',
  },
  blog: {
    post: {
      borderColor: '#2D608B',
    },
  },
  blockquote: {
    color: 'rgba(255,255,255, 0.5)',
    border: 'rgba(255,255,255,0.3)',
  },
  bio: {
    textColor: '#fff',
    backgroundColor: '#1d2731',
  },
  code: {
    backgroundColor: '#0c1116',
    borderColor: '#080b0e',
  },
};

export const light = {
  main: {
    color: '#000',
    primaryBGColor: '#F0F0F0',
    secondaryBGColor: '#ffffff',
    shadowColor: '#cccccc',
  },
  blog: {
    post: {
      borderColor: '#8d8d8d',
    },
  },
  blockquote: {
    color: 'rgba(0,0,0,0.5)',
    border: 'rgba(0,0,0,0.3)',
  },
  bio: {
    textColor: '#000',
    backgroundColor: '#EEEEEE',
  },
  code: {
    backgroundColor: '#F8F8F8',
    borderColor: '#E7EAED',
  },
};

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => props.theme.main.color};
    background-color: ${props => props.theme.main.primaryBGColor};
  }
  pre {
    background-color: ${props => props.theme.code.backgroundColor};
    padding: 10px;
    border: 1px solid ${props => props.theme.code.borderColor};
    border-radius: 3px;
    overflow: auto;
  }
  blockquote {
    color: ${props => props.theme.blockquote.color};
    border-left: 4px solid ${props => props.theme.blockquote.border};
  }
  p{
    code {
      background-color: ${props => props.theme.code.backgroundColor};
      padding: 1px;
      border: 1px solid ${props => props.theme.code.borderColor};
      border-radius: 3x;
    }
  }
`;
