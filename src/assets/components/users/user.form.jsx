import { useState } from 'react';
import { Input, Button, notification, Modal } from "antd";
import { CreateUserAPI } from '../../services/api.service';

const UserForm = (props) => {
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassWord] = useState('')
    const [phone, setPhone] = useState('')

    const [isModalOpen, setIsModalOpen] = useState(false)
    const { loadUser } = props;

    const handleOnSubmit = async () => {
        // use try / catch
        const res = await CreateUserAPI(username, email, password, phone)
        if (res.data) {
            notification.success({
                message: 'created user',
                description: 'user create successfully',
            })
            resetAndCloseModal()
            await loadUser()
        } else {
            notification.error({
                message: 'failed user',
                description: JSON.stringify(res.message),
            })
        }
        console.log('check res: ', res.data)
    }

    const resetAndCloseModal = () => {
        setIsModalOpen(false)
        setUserName('')
        setEmail('')
        setPassWord('')
        setPhone('')
    }


    return (
        <>
            <div className="user-heading">
                <h3>Table Users</h3>
                <Button type='primary' onClick={() => setIsModalOpen(true)}>Create User</Button>
            </div>

            <Modal title="Create User" open={isModalOpen} onOk={() => handleOnSubmit()} onCancel={() => resetAndCloseModal()} maskClosable={false} okText="CREATE">
                <div className="user-form">
                    <div className="user-group">
                        <span>UserName</span>
                        <Input onChange={(event) => setUserName(event.target.value)} value={username} />
                    </div>
                    <div className="user-group">
                        <span>Email</span>
                        <Input onChange={(event) => setEmail(event.target.value)} value={email} />
                    </div>
                    <div className="user-group">
                        <span>Password</span>
                        <Input.Password onChange={(event) => setPassWord(event.target.value)} value={password} />
                    </div>
                    <div className="user-group">
                        <span>Phone</span>
                        <Input onChange={(event) => setPhone(event.target.value)} value={phone} />
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default UserForm