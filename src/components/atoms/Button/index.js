import React from 'react';
import Proptypes from 'prop-types';
import { Button } from 'antd';

const AntButton = ({
  type,
  size,
  icon,
  shape,
  disabled,
  loading,
  children,
  block,
  onClick,
}) => {
  return (
    <AntButton
      type={type}
      size={size}
      icon={icon}
      shape={shape}
      loading={loading}
      disabled={disabled}
      block={block}
      onClick={onClick}
    >
      {children}
    </AntButton>
  );
};

AntButton.defaultProps = {
  type: 'primary',
  size: 'default',
  icon: '',
  shape: 'default',
  disabled: false,
  loading: false,
  children: '',
  block: false,
  onClick: () => {},
};

AntButton.propTypes = {
  type: Proptypes.string,
  size: Proptypes.string,
  icon: Proptypes.any,
  shape: Proptypes.string,
  disabled: Proptypes.bool,
  loading: Proptypes.bool,
  children: Proptypes.any,
  block: Proptypes.bool,
  onClick: Proptypes.func,
};

export default AntButton;
