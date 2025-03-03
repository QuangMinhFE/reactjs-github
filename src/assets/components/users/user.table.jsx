import { Table } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import UpdateUserModal from './update.user.modal';


const UserTable = (props) => {
    const { dataUsers } = props;

    const columns = [
        {
            title: 'ID',
            'key': 'id',
            render: (_, record) => (
                <>
                    <a href='#'>{record.id}</a >
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
                    <EditOutlined className='feature-btn feature-btn--edit' />
                    <DeleteOutlined className='feature-btn feature-btn--delete' />
                </div>
            ),
        },
    ];
    return (
        <>
            <Table columns={columns} dataSource={dataUsers} rowKey={'id'} />
            <UpdateUserModal />
        </>
    );
}
export { UserTable }