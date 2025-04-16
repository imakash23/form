import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isSuccess = Math.random() > 0.3;
   
      toast.success("Login successful!");
      setTimeout(() => navigate("/welcome"), 1500); 
 
  };

  return (
    <Card className="p-4 shadow-lg rounded-lg" style={{ background: "#ffffffdd" }}>
      <Card.Title className="text-center text-primary fs-3 fw-bold">Login</Card.Title>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100">
            Login
          </Button>
        </Form>
        <p className="text-center mt-3">
          Don't have an account?{" "}
          <Link to="/register" className="text-primary fw-bold">
            Register
          </Link>
        </p>
      </Card.Body>
    </Card>
  );
};

export default LoginForm;
