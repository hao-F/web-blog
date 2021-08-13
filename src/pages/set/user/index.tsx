import React, { /*useState*/ } from 'react';
import { Table, /*Radio,*/ Button } from 'antd';

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    render: (text: string) =>  <Button type="link" onClick={() => activateLasers(text)}>{text}</Button>
  },
  {
    title: '用户名',
    dataIndex: 'username',
  },
  {
    title: '地址',
    dataIndex: 'address',
  },
  {
    title: '电话',
    dataIndex: 'tele',
  },
  {
    title: '操作',
    key: 'action',
    render: (row: object) => {
      return (
        <div>
          <Button type="link" onClick={() => onEditor(row)}>编辑</Button>
          <Button type="link" danger onClick={() => onDelete(row)}>删除</Button>
        </div>
      )
    }
  }
];

const activateLasers = (t: string) => {
  console.log(t)
}

const onEditor = (row:object) => {
  console.log(row);
}

const onDelete = (row: object) => {
  console.log(row);
}

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
  tele: string,
}

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown22',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tele: '120',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tele: '110',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tele: '119',
  },
  {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
    tele: '114',
  },
];

const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
};

const UserTable = () => {

  return (
    <div>
      <Table
        rowSelection={{
          type: 'checkbox',
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};

export default UserTable;