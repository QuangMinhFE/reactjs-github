import { Input, Button } from "antd"

const RegisterPage = () => {
    return (
        <>
            <div className="user-form">
                <div className="user-group">
                    <span>UserName</span>
                    <Input />
                </div>
                <div className="user-group">
                    <span>Email</span>
                    <Input />
                </div>
                <div className="user-group">
                    <span>Password</span>
                    <Input />
                </div>
                <div className="user-group">
                    <span>Phone</span>
                    <Input />
                </div>
                <div>
                    <Button type='primary'>Register</Button>
                </div>
            </div>
        </>
    )
}

export default RegisterPage