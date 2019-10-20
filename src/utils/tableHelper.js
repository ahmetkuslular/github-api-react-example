import React from 'react';
import format from 'date-fns/format';
import trLocale from 'date-fns/locale/tr';

const DateCell = date => (
  <span>
    {format(new Date(date), 'MM/dd/yyyy HH:ss', {
      locale: trLocale,
    })}
  </span>
);

const renderCell = (value, type, key) => {

  switch (type) {
    case 'date':
      return DateCell(value);
    case 'object':
      return <span>{value[key]}</span>;
    default:
      return <span>{value}</span>;
  }
};

export default renderCell;
