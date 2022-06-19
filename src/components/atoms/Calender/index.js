import React from 'react';
import Proptypes from 'prop-types';
import moment from 'moment';
import { Calendar } from 'antd';

const AntCalender = ({
  value,
  dateCellRender,
  monthCellRender,
  onSelect,
  onPanelChange,
}) => {
  return (
    <Calendar
      value={value}
      dateCellRender={dateCellRender}
      monthCellRender={monthCellRender}
      onSelect={onSelect}
      onPanelChange={onPanelChange}
    />
  );
};

AntCalender.defaultProps = {
  value: '',
  dateCellRender: () => {},
  monthCellRender: () => {},
  onSelect: () => {},
  onPanelChange: () => {},
};

AntCalender.propTypes = {
  value: Proptypes.instanceOf(moment),
  dateCellRender: Proptypes.func,
  monthCellRender: Proptypes.func,
  onSelect: Proptypes.func,
  onPanelChange: Proptypes.func,
};

export default AntCalender;
