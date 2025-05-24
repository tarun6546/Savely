import React from 'react';
import { Form, Input } from 'antd';
import { Link } from 'react-router-dom'; // Add this import

const Register = () => {
    //submit logic
    const submitHandler = (values) => {
        console.log('Form submitted with values:', values);
        // Here you can add your registration logic, like calling an API
    };
  return (
    <>
        <div className="register-page">
            <Form layout="vertical" onFinish={submitHandler}>
                <h1>Register Form</h1>
                <Form.Item label="Name" name="name">
                    <Input />
                </Form.Item>
                <Form.Item label="Email" name="email">
                    <Input type="email" />
                </Form.Item>
                <Form.Item label="Password" name="password">
                    <Input type="password" />
                </Form.Item>
                <div className='d-flex justify-content-end'>
                    <Link to="/login">Already Register ? Click Here To Login</Link>
                    <button className='btn btn-primary'>Register</button>
                </div>
            </Form>
        </div>
    </>
  )
}

export default Register;