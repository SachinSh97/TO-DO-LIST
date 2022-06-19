import React from 'react';
import Proptypes from 'prop-types';
import { Input } from 'antd';

const TextField = ({
  id,
  name,
  placeholder,
  type,
  maxLength,
  prefix,
  suffix,
  allowClear,
  value,
  onChange,
}) => {
  return (
    <Input
      id={id}
      name={name}
      placeholder={placeholder}
      type={type}
      maxLength={maxLength}
      prefix={prefix}
      suffix={suffix}
      allowClear={allowClear}
      value={value}
      onChange={onChange}
    />
  );
};

TextField.defaultProps = {
  id: '',
  name: '',
  placeholder: '',
  type: 'text',
  prefix: '',
  suffix: '',
  allowClear: true,
  value: '',
  onClick: () => {},
};

TextField.propTypes = {
  id: Proptypes.string,
  name: Proptypes.string,
  placeholder: Proptypes.string,
  type: Proptypes.string,
  prefix: Proptypes.any,
  suffix: Proptypes.any,
  allowClear: Proptypes.bool,
  maxLength: Proptypes.number,
  value: Proptypes.string,
  onClick: Proptypes.func,
};

export default TextField;
