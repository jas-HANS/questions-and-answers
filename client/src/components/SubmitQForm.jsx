import React from 'react';
import {Button, Form} from 'react-bootstrap';

const SubmitQForm = () => {
  return (
    <Form>
      {/* max length of 1000 */}
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>inquire here</Form.Label>
        <Form.Control as="textarea" rows="3" />
      </Form.Group>

      {/* max length of 60 chars */}
      <Form.Group>
        <Form.Control type="text" placeholder="Example:jackson11!" />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
         For auth reasons, you will not be emailed.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
       Submit
      </Button>
    </Form>
  );
};

export default SubmitQForm;
