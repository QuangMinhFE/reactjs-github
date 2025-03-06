import { Input, Button, Form, notification, Row, Col, Divider } from "antd"
import { RegisterUserAPI } from "../services/api.user.jsx";
import { useNavigate, Link } from "react-router-dom";

const RegisterPage = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const onFinish = async (value) => {
        const res = await RegisterUserAPI(value.fullName, value.email, value.password, value.phone);
        if (res.data) {
            notification.success({
                message: 'Register user',
                description: 'Đăng ký thành công'
            });
            navigate('/login')
        } else {
            notification.error({
                message: 'Register failed',
                description: JSON.stringify(res.message)
            })
        }
        console.log(res.data)
    }
    return (
        <>
            <Form name="register" form={form} onFinish={onFinish} layout="vertical"
                className="register-form" autoComplete="off">
                <h2>Register Form</h2>
                <Row>
                    {/* size màn hình thay thế span attr */}
                    <Col span={24}>
                        <Form.Item
                            className="register-group" label="Fullname"
                            name="fullName" rules={[{ required: true, message: 'Please input your fullName!' }]}>
                            <Input placeholder="nhập tên đăng nhập" />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item
                            className="register-group" label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
                            <Input placeholder="nhập email" />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item
                            className="register-group" label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                            <Input.Password placeholder="nhập mật khẩu" />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item className="register-group" label="Phone" name="phone" rules={[
                            {
                                required: true,
                                pattern: new RegExp(/\d+/g),
                                message: 'wrong format!'
                            }

                        ]}>
                            <Input placeholder="nhập số điện thoại" />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item className="register-group">
                            <Button type="primary" onClick={() => form.submit()} >Submit</Button>
                            {/* onClick={() => form.submit()} */}
                            {/* htmlType="submit" */}
                        </Form.Item>
                    </Col>

                    <Col span={24}>
                        <Divider />
                        <p>Đã có tài khoản <Link to={'/login'}>Đăng nhập ngay</Link></p>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default RegisterPage