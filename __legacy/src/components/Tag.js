import React from 'react';

import css from '../css/components/Tag.module.css';

const Tag = ({ id, tag }) => {
  return (
    <div id={`ref-tag-${id}`} className={css.tag}>
      {tag}
    </div>
  );
};

export default Tag;
