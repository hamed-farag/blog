import React from 'react';
import { rhythm, scale } from '../../../../utils/typography';

export default function(props) {
  const { tags } = props.metadate;

  return <div>{tags}</div>;
}
