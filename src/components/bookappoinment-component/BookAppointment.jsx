import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./BookAppointment.styles.css";

const BookAppointment = () => {
  return (
    <div className="form px-3 py-3">
      <Form>
        <Form.Select
          aria-label="Default select example"
          size="sm"
          className="mb-3"
        >
          <option>Select Department</option>
          <option value="1">ENT</option>
          <option value="2">EYE</option>
          <option value="3">GYNO</option>
        </Form.Select>

        <Form.Control
          type="text"
          size="sm"
          placeholder="Full Name"
          required
          className="mb-3"
        />

        <Form.Control
          type="email"
          size="sm"
          placeholder="name@example.com"
          required
          className="mb-3"
        />

        <Form.Control
          type="number"
          size="sm"
          placeholder="Phone Number"
          required
          className="mb-3"
        />

        <Form.Control
          type="date"
          size="sm"
          placeholder="Date"
          required
          className="mb-3"
        />

        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default BookAppointment;
