import { Table } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import UpdateUserModal from './update.user.modal';
import { useState } from 'react';
import ViewUserDetail from './view.user.detail';


const UserTable = (props) => {
    const { dataUsers, loadUser } = props;
    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false)
    const [dataUpdate, setDataUpdate] = useState(null);

    const [dataDetail, setDataDetail] = useState(null);
    const [isDetailOpen, setIsDetailOpen] = useState(false)


    const columns = [
        {
            title: 'ID',
            'key': 'id',
            dataIndex: 'id',
            render: (_, record) => (
                <>
                    <a href='#' onClick={() => {
                        setDataDetail(record)
                        setIsDetailOpen(true)
                    }}>{record.id}</a >
                </>
            ),
        },
        {
            title: 'UserName',
            'key': 'username',
            dataIndex: 'username', // cách lấy dữ liệu từ object
        },
        {
            title: 'Email',
            'key': 'email',
            dataIndex: 'email',
        },
        {
            title: 'PassWord',
            'key': 'password',
            dataIndex: 'password',
        },
        {
            title: 'Phone',
            'key': 'phone',
            dataIndex: 'phone',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <div className='feature'>
                    <EditOutlined className='feature-btn feature-btn--edit' onClick={() => {
                        setDataUpdate(record);
                        setIsModalUpdateOpen(true);
                    }} />
                    <DeleteOutlined className='feature-btn feature-btn--delete' />
                </div>
            ),
        },
    ];


    return (
        <>
            <Table columns={columns} dataSource={dataUsers} rowKey={'id'} />
            <UpdateUserModal isModalUpdateOpen={isModalUpdateOpen} setIsModalUpdateOpen={setIsModalUpdateOpen} dataUpdate={dataUpdate} setDataUpdate={setDataUpdate} loadUser={loadUser} />
            <ViewUserDetail isDetailOpen={isDetailOpen} setIsDetailOpen={setIsDetailOpen} dataDetail={dataDetail} setDataDetail={setDataDetail} />
        </>
    );
}
export { UserTable }