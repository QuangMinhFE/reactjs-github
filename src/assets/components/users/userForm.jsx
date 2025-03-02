import { useState } from 'react';
import './user.css'
import { Input, Button } from "antd";

const UserForm = () => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassWord] = useState('')
    const [phone, setPhone] = useState('')


    const handleOnClick = () => {
        console.log(`name: ${fullName}, email: ${email}, password: ${password}, phone: ${phone}`)
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