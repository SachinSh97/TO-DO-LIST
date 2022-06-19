import React from 'react';
import Proptypes from 'prop-types';
import { Badge } from 'antd';

const AntBadge = ({ color, count, status, text, title, children }) => {
  return (
    <Badge
      color={color}
      count={count}
      status={status}
      text={text}
      title={title}
    >
      {children}
    </Badge>
  );
};

AntBadge.propTypes = {
  color: Proptypes.string,
  count: Proptypes.node,
  status: Proptypes.string,
  text: Proptypes.string,
  title: Proptypes.string,
  children: Proptypes.any,
};

export default AntBadge;
