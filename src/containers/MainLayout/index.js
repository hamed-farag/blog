import React from 'react';
import { Link } from 'gatsby';
import { Header, Body, Container } from './ui';

class MainLayout extends React.Component {
  render() {
    const { children, title } = this.props;

    return (
      <React.Fragment>
        <Header>
          <h2>
            <Link to={'/'}>{title}</Link>
          </h2>
        </Header>
        <Container>
          <Body>{children}</Body>
        </Container>
      </React.Fragment>
    );
  }
}

export default MainLayout;
