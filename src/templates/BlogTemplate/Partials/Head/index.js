import React from 'react';

import { Head, Metadata } from './ui';

export default function(props) {
  const { title, date, readingTime, subTitle, category } = props.metadate;
  return (
    <Head>
      <h1>{title}</h1>
      <h3>{subTitle}</h3>
      <Metadata>
        {date} | {readingTime}
      </Metadata>
    </Head>
  );
}
