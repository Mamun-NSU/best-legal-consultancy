import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Checkout.css";

const Checkout = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <h2 className="text-center">Hello, Welcome to the checkout page</h2>

      <Form className="w-50 mx-auto" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your first name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your Last Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="12/B, Dhanmondi, Dhaka" />
        </Form.Group>

        <Button
          className="w-25 px-5 d-flex mx-auto myBtn"
          variant="success"
          type="submit"
        >
          Information Submit
        </Button>
      </Form>
    </div>
  );
};

export default Checkout;
