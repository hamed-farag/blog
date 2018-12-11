import React from 'react';
import { Link } from 'gatsby';
import { ThemeProvider } from 'styled-components';

import { Header, Body, Container, Title, Control } from './ui';
import { GlobalStyle, dark, light, themes } from './themes';
import themeIcon from '../../assets/images/theme.png';

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
            <Title>
              <h2>
                <Link to={'/'}>{title}</Link>
              </h2>
              <span>beta</span>
            </Title>
            <Control>
              <a onClick={() => this.onThemeChange()}>
                <img src={themeIcon} />
              </a>
            </Control>
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
