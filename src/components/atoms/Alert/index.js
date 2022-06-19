import React from 'react';
import Proptypes from 'prop-types';
import { Alert } from 'antd';

const AntAlert = ({ type, message, showIcon }) => {
  return <Alert type={type} message={message} showIcon={showIcon} />;
};

AntAlert.defaultProps = {
  type: 'info',
  message: '',
  showIcon: true,
};

AntAlert.propTypes = {
  type: Proptypes.string,
  message: Proptypes.any,
  showIcon: Proptypes.bool,
};

export default AntAlert;
