import React, { useRef } from 'react';
import ProTable from '@ant-design/pro-table';

const _list = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res({
        data: [
          {
            id: '1',
            name: '1',
          },
          {
            id: '2',
            name: '2',
          },
          {
            id: '3',
            name: '3',
          },
        ],
      });
    }, 100);
  });
};

export default () => {
  const columns = [
    {
      title: '组织名称',
      dataIndex: 'name',
    },
  ];

  return (
    <ProTable
      rowKey="id"
      scroll={{ x: 1300 }}
      columns={columns}
      options={false}
      pagination={false}
      request={async (params) => {
        try {
          const response = await _list(params);
          return {
            data: response.data,
            success: true,
          };
        } catch (e) {
          return {
            success: false,
          };
        }
      }}
    />
  );
};
