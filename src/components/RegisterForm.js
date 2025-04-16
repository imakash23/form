import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isSuccess = Math.random() > 0.3;
    if (isSuccess) toast.success("Registration successful!");
    else toast.error("Registration failed. Please try again.");
  };

  return (
    <Card className="p-4 shadow-lg rounded-lg" style={{ background: "#ffffffdd" }}>
      <Card.Title className="text-center text-primary fs-3 fw-bold">Register</Card.Title>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
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
            Register
          </Button>
        </Form>
        <p className="text-center mt-3">
          Already have an account?{" "}
          <Link to="/login" className="text-primary fw-bold">
            Login
          </Link>
        </p>
      </Card.Body>
    </Card>
  );
};

export default RegisterForm;
