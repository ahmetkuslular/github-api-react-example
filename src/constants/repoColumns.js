import React from 'react';
import renderCell from 'utils/tableHelper';

export default [
  {
    title: 'Repo Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Username',
    dataIndex: 'owner',
    key: 'username',
    render: (value, record) => renderCell(record['owner'], 'object', 'login'),
  },
  { title: 'Description', dataIndex: 'description', key: 'description' },
  { title: 'Stars', dataIndex: 'stargazers_count', key: 'stars', sorter: true },
  { title: 'Forks', dataIndex: 'forks', key: 'forks', sorter: true },
  {
    title: 'Last Update Date',
    dataIndex: 'updated_at',
    key: 'updated',
    sorter: true,
    render: value => renderCell(value, 'date'),
  },
];
