import React from 'react';
import { Link } from 'gatsby';
import { ThemeProvider } from 'styled-components';

import { setLocalStorage, getLocalStorage } from '../../utils/storage';

import PoweredBy from '../../components/shared/PoweredBy';
import SEO from '../../components/shared/SEO';

import {
  Header,
  InnerHeader,
  Body,
  Container,
  Title,
  Control,
  Beta,
} from './ui';
import { GlobalStyle, dark, light, themes } from './themes';

import themeIcon from '../../assets/images/theme.png';

class MainLayout extends React.Component {
  state = {
    theme: getLocalStorage('theme') || themes.light,
  };

  saveSelectedTheme(theme) {
    this.setState({ theme });
    setLocalStorage('theme', theme);
  }

  onThemeChange = () => {
    const { theme } = this.state;
    switch (theme) {
      case themes.dark:
        this.saveSelectedTheme(themes.light);
        break;

      default:
        this.saveSelectedTheme(themes.dark);
        break;
    }
  };

  render() {
    const { children, title, repoUrl } = this.props;

    const theme = this.state.theme == themes.light ? light : dark;

    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyle />
          <SEO />
          <Header>
            <InnerHeader>
              <Title>
                <h2>
                  <Link to={'/'}>{title}</Link>
                </h2>
                <Beta>BETA</Beta>
              </Title>
              <Control>
                <a onClick={() => this.onThemeChange()}>
                  <img src={themeIcon} />
                </a>
              </Control>
            </InnerHeader>
          </Header>
          <Container>
            <Body>{children}</Body>
            <PoweredBy repoUrl={repoUrl} />
          </Container>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default MainLayout;
