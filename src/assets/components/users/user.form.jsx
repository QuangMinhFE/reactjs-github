import { useState } from 'react';
import './user.css'
import { Input, Button, notification } from "antd";
import { CreateUserAPI } from '../../services/api.service';

const UserForm = () => {
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassWord] = useState('')
    const [phone, setPhone] = useState('')


    const handleOnClick = async () => {
        // use try / catch
        const res = await CreateUserAPI(username, email, password, phone)
        // debugger
        if (res.data) {
            notification.success({
                message: 'created user',
                description: 'user create successfully',
            })
        } else {
            notification.error({
                message: 'failed user',
                description: JSON.stringify(res.message),
            })
        }
        console.log('check res: ', res.data)
    }

    return (
        <div className="user-form">
            <div className="user-wrap">
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
                <div>
                    <Button type='primary' onClick={handleOnClick}>Create User</Button>
                </div>
            </div>
        </div>
    )
}

export default UserForm