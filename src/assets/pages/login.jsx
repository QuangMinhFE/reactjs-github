import { Form, Row, Col, Input, Button, Divider, message } from "antd"
import { useNavigate, Link } from "react-router-dom"
import { LoginUserAPI } from "../services/api.user";

const LoginPage = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const onFinish = async (values) => {
        const res = await LoginUserAPI(values.username, values.password);
        console.log(res)
        if (res.data) {
            message.success('Đăng nhập thành công')
            navigate('/')
        } else {
            message.error(JSON.stringify(res.message))
        }
    }

    return (
        <>
            <Form name="login" form={form} onFinish={onFinish} layout="vertical"
                className="login-form" autoComplete="off">
                <h2>Login Form</h2>
                <Row>
                    {/* size màn hình thay thế span attr */}
                    <Col span={24}>
                        <Form.Item
                            className="login-group" label="Email" name="username" rules={[{ required: true, message: 'Please input your email!' }]}>
                            <Input placeholder="nhập email" />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item
                            className="login-group" label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                            <Input.Password placeholder="nhập mật khẩu" />
                        </Form.Item>
                    </Col>

                    <Col span={24}>
                        <Form.Item className="login-group">
                            <Button type="primary" onClick={() => form.submit()} >Submit</Button>
                            {/* onClick={() => form.submit()} */}
                            {/* htmlType="submit" */}
                        </Form.Item>
                    </Col>

                    <Col span={24}>
                        <Divider />
                        <p>Chưa có tài khoản <Link to={'/register'}>Đăng ký ngay</Link></p>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default LoginPage
