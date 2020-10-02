import React from 'react';
import {Modal, Button, Form} from 'react-bootstrap';

const SubmitQModal = ({show, question, onHide}) => {
  return (
    <div>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={onHide}
      >
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
             Ask Your Question
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
           About the [product name - via product detail get req?]
            <br></br>
            {/* form goes here */}
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                Well never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
              Submit
              </Button>
            </Form>

          </Modal.Body>
        </Modal.Dialog>
      </Modal>
    </div>
  );
};

export default SubmitQModal;
