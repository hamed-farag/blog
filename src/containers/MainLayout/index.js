import React from 'react';
import { Link } from 'gatsby';
import { ThemeProvider } from 'styled-components';

import { Header, Body, Container } from './ui';
import { GlobalStyle, dark, light, themes } from './themes';

import PoweredBy from '../../components/shared/PoweredBy';

class MainLayout extends React.Component {
  state = {
    theme: themes.light,
  };

  onThemeChange = () => {
    const { theme } = this.state;
    switch (theme) {
      case themes.dark:
        this.setState({ theme: themes.light });
        break;

      default:
        this.setState({ theme: themes.dark });
        break;
    }
  };

  render() {
    const { children, title } = this.props;

    const theme = this.state.theme == themes.light ? light : dark;

    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyle />
          <Header>
            <h2>
              <Link to={'/'}>{title}</Link>
            </h2>
            <span>beta</span>
            <button onClick={() => this.onThemeChange()}>theme</button>
          </Header>
          <Container>
            <Body>{children}</Body>
            <PoweredBy />
          </Container>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default MainLayout;
