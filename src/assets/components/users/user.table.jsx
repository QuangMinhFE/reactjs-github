import { Table } from 'antd';
import { useEffect, useState } from 'react';
import { fetchAllUserAPI } from '../../services/api.service';

const columns = [
    {
        title: 'UserName',
        dataIndex: 'username', // cách lấy dữ liệu từ object
    },
    {
        title: 'Email',
        dataIndex: 'email',
    },
    {
        title: 'PassWord',
        dataIndex: 'password',
    },
    {
        title: 'Phone',
        dataIndex: 'phone',
    },
];


const UserTable = (props) => {
    const { dataUsers } = props;
    return (<Table columns={columns} dataSource={dataUsers} rowKey={'id'} />);
}
export { UserTable }