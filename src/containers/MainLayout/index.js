import React from 'react';
import { Link } from 'gatsby';
import { Header, Body, Container } from './ui';

class MainLayout extends React.Component {
  render() {
    const { children, title } = this.props;

    return (
      <Container>
        <Header>
          <h3>
            <Link to={'/'}>{title}</Link>
          </h3>
        </Header>
        <Body>{children}</Body>
      </Container>
    );
  }
}

export default MainLayout;
