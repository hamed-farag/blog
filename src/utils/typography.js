import Typography from 'typography';
import githubTheme from 'typography-theme-github';

githubTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  'h1,h2,h3': {
    border: 0,
    margin: 0,
  },
});

const typography = new Typography(githubTheme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
export const lineColor = '#ccc';
