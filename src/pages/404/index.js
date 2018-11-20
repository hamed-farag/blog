import React from 'react'
import MainLayout from '../../containers/MainLayout'

class NotFoundPage extends React.Component {
  render() {
    return (
      <MainLayout location={this.props.location}>
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </MainLayout>
    )
  }
}

export default NotFoundPage
