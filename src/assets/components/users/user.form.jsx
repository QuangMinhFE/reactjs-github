import { useState } from 'react';
import './user.css'
import { Input, Button, notification, message } from "antd";
import { CreateUserAPI } from '../../services/api.service';

const UserForm = () => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassWord] = useState('')
    const [phone, setPhone] = useState('')

    const handleOnClick = async () => {
        // use try / catch
        const res = await CreateUserAPI(fullName, email, password, phone)
        // console.log('check res: ', res)
        // debugger
        if (res.data) {
            notification.success({
                message: 'created user',
                description: 'user create successfully',
            })
        } else {
            notification.error({
                message: 'failed user',
                // description: 'user create failed',
                description: JSON.stringify(res.message),
            })
        }
        console.log('check res: ', res.data)
        // console.log(`name: ${fullName}, email: ${email}, password: ${password}, phone: ${phone}`)
    }


    return (
        <div className="user-form">
            <div className="user-wrap">
                <div className="user-group">
                    <span>Fullname</span>
                    <Input onChange={(event) => setFullName(event.target.value)} value={fullName} />
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