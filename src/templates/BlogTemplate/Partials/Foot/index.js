import React from 'react';
import { Link } from 'gatsby';
import { TwitterShareButton, TwitterIcon } from 'react-share';

import { Foot, Tags, Tag, Share } from '../../ui';

import { rhythm, scale } from '../../../../utils/typography';

const renderTags = function(tags) {
  return tags.map((tag, index) => {
    return (
      <Tag key={index}>
        <Link to={'/'}>{tag}</Link>
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
