import React from 'react'
import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';

const Login = () => {
    const submitHandler = (values) => {
        console.log('Form submitted with values:', values);
    }; 

    return (  
        <>
            <div className="register-page">
                <Form layout="vertical" onFinish={submitHandler}>
                    <h1>Login form</h1>
                    <Form.Item 
                        label="Email" 
                        name="email"
                        rules={[
                            { required: true, message: 'Please input your email!' },
                            { type: 'email', message: 'Please enter a valid email!' }
                        ]}
                    >
                        <Input type="email" />
                    </Form.Item>
                    <Form.Item 
                        label="Password" 
                        name="password"
                        rules={[
                            { required: true, message: 'Please input your password!' },
                            { min: 6, message: 'Password must be at least 6 characters!' }
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <div className='d-flex justify-content-between'>
                        <Link to="/register">Not a User ? Click Here To Register</Link>
                        <Button type="primary" htmlType="submit">
                            Login
                        </Button>
                    </div>
                </Form>
            </div>
        </>
    )
}

export default Login