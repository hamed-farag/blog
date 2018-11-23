import React from 'react';
import { rhythm, scale } from '../../../../utils/typography';

export default function(props) {
  const {
    title,
    date,
    readingTime,
    subTitle,
    tags,
    category,
  } = props.postHeader;

  return (
    <div>
      <h1>{title}</h1>
      <p
        style={{
          ...scale(-1 / 5),
          display: 'block',
          marginBottom: rhythm(1),
          marginTop: rhythm(-1),
        }}
      >
        {date}
      </p>
    </div>
  );
}
