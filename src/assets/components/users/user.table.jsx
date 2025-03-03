import { Table } from 'antd';
import { fetchAllUserAPI } from '../../services/api.service';
import { useEffect, useState } from 'react';
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


const UserTable = () => {
    // fake list user (because link not used)
    const [dataUsers, setDataUsers] = useState([]);

    // empty arr => run 1 time
    // don't use async await in useEffect
    useEffect(() => {
        console.log('run effect 111')
        loadUser()
    }, [])

    const loadUser = async () => {
        const res = await fetchAllUserAPI()
        setDataUsers(res.data)
    }

    console.log('run render 000')

    return (<Table columns={columns} dataSource={dataUsers} rowKey={'id'} />);
}
export { UserTable }