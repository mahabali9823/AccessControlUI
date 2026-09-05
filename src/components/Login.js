import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button, Card, Form, Input, message } from "antd";

const Login = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const onFinish = (values) => {
        const success = login(values.username, values.password);
        if (success) {
            message.success("Login successful");
            navigate("/student");
        } else {
            message.error("Invalid credentials");
        }
    };

    return (
        <Card title="Login" style={{ width: 300, margin: "100px auto" }}>
            <Form onFinish={onFinish}>
                <Form.Item name="username" rules={[{ required: true }]}>
                    <Input placeholder="student / teacher / principal" />
                </Form.Item>
                <Form.Item name="password" rules={[{ required: true }]}>
                    <Input.Password placeholder="Password (123)" />
                </Form.Item>

                <Button type="primary" htmlType="submit" block>
                    Login
                </Button>
            </Form>
        </Card>
    )
};

export default Login;