import React from 'react';

// Import typefaces
import 'typeface-montserrat';
import 'typeface-merriweather';

import profilePic from '../../../assets/profile-pic.jpg';
import { rhythm } from '../../../utils/typography';

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Hamed Farag`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            borderRadius: '50%',
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Written by <strong>Hamed Farag</strong> who lives and works in Cairo
          building valuable things.{' '}
          <a href="https://twitter.com/Hamed_Farag">follow me on Twitter</a>
        </p>
      </div>
    );
  }
}

export default Bio;
