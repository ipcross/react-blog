import React, { PropTypes } from 'react';
import moment from 'moment';
import { DATE_FORMAT } from 'constants/DateFormat';

const DateTime = ({children}) => (
  <span>
    {moment(children).format(DATE_FORMAT)}
  </span>
);

DateTime.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};

export default DateTime;
