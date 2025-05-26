import { useState, useEffect } from "react";
import { Form, Input, message, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // Form submission handler
  const submitHandler = async (values) => {
    try {
      setLoading(true);
      console.log('Form values:', values);

      // Make API call to register
      const response = await axios.post("http://localhost:8080", values);
      console.log('Response:', response.data);

      if (response.data.success) {
        message.success("Registration Successful");
        navigate("/login");
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      console.error('Registration error:', error);
      message.error(error.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  // Prevent logged in users from accessing register page
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <>
      <div className="register-page bg-light">
        <div className="container">
          <div className="row justify-content-center align-items-center vh-100">
            <div className="col-md-6">
              {loading && <Spinner />}
              <Form 
                layout="vertical" 
                onFinish={submitHandler}
                className="card p-4 shadow-sm"
              >
                <h2 className="text-center mb-4">Register</h2>
                
                <Form.Item 
                  label="Name" 
                  name="name"
                  rules={[
                    { required: true, message: 'Please input your name!' },
                    { min: 3, message: 'Name must be at least 3 characters!' }
                  ]}
                >
                  <Input placeholder="Enter your name" />
                </Form.Item>

                <Form.Item 
                  label="Email" 
                  name="email"
                  rules={[
                    { required: true, message: 'Please input your email!' },
                    { type: 'email', message: 'Please enter a valid email!' }
                  ]}
                >
                  <Input type="email" placeholder="Enter your email" />
                </Form.Item>

                <Form.Item 
                  label="Password" 
                  name="password"
                  rules={[
                    { required: true, message: 'Please input your password!' },
                    { min: 6, message: 'Password must be at least 6 characters!' }
                  ]}
                >
                  <Input.Password placeholder="Enter your password" />
                </Form.Item>

                <div className="d-flex justify-content-between align-items-center">
                  <Link to="/login" className="text-decoration-none">
                    Already Registered? Login Here
                  </Link>
                  <Button 
                    type="primary" 
                    htmlType="submit"
                    loading={loading}
                  >
                    Register
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;