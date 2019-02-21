import React from 'react';

import { Head, Metadata } from './ui';

export default function(props) {
  const { title, date, readingTime, subTitle, category } = props.metadate;
  return (
    <Head>
      <h1>{title}</h1>
      <h3>{subTitle}</h3>
      <Metadata>
        {date} |{' '}
        <a
          href="https://blog.medium.com/read-time-and-you-bc2048ab620c"
          target="_blank"
        >
          {readingTime}
        </a>
      </Metadata>
    </Head>
  );
}
