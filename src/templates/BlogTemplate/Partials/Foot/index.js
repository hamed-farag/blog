import React from 'react';
import { Link } from 'gatsby';
import { TwitterShareButton, TwitterIcon } from 'react-share';

import { cssHSL } from '../../../../utils/color';

import { Foot, Tags, Tag, Share } from '../../ui';

const renderTags = function(tags) {
  return tags.map((tag, index) => {
    return (
      <Tag key={index} style={{ background: cssHSL() }}>
        <span>{tag}</span>
      </Tag>
    );
  });
};

export default function(props) {
  const { title, url, tags } = props.metadate;
  const tagsArr = tags && tags.split(',');

  return (
    <Foot>
      <Tags>{tagsArr && renderTags(tagsArr)}</Tags>
      <Share>
        <span>Share: </span>
        <TwitterShareButton url={url} title={title} hashtags={tagsArr}>
          <TwitterIcon size={30} round={true} />
        </TwitterShareButton>
      </Share>
    </Foot>
  );
}
