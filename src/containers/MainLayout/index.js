import React from 'react';
import { Link } from 'gatsby';
import { Header, Body, Container } from './ui';
import PoweredBy from '../../components/shared/PoweredBy';

class MainLayout extends React.Component {
  render() {
    const { children, title } = this.props;

    return (
      <React.Fragment>
        <Header>
          <h2>
            <Link to={'/'}>{title}</Link>
          </h2>
          <span>beta</span>
        </Header>
        <Container>
          <Body>{children}</Body>
          <PoweredBy />
        </Container>
      </React.Fragment>
    );
  }
}

export default MainLayout;
