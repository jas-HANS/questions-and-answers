import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SubmitQForm = () => {
  return (
    <Form style={{borderRadius: '12px', marginBottom: '0px'}}>

      <Form.Group controlId="form.ControlTextarea0">
        <Form.Label></Form.Label>
        <Form.Control
          as="textarea" rows="3" maxLength="1000"
          // value={}
          // onChange={}
        />
      </Form.Group>

      <Form.Group controlId="form.ControlTextarea1">nickname?
        <Form.Control
          type="text" placeholder="Example:jackson11!" maxLength="60"
          // value={}
          // onChange={}
        />
        <Form.Text className="text-muted">
        For privacy reasons, do not use your full name or email address.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email" maxLength="60"
          placeholder="Why did you like the product or not?"
          // value={}
          // onChange={}
        />
        <Form.Text className="text-muted">
        For authentication reasons, you will not be emailed.
        </Form.Text>
      </Form.Group>

      <Button variant="dark" type="submit">
       Submit
      </Button>
    </Form>
  );
};

export default SubmitQForm;
