import React from 'react';
import {Modal, Button, Form} from 'react-bootstrap';
import SubmitQForm from './SubmitQForm.jsx';

const SubmitQModal = ({show, question, onHide}) => {
  return (
    <div>
      <Modal closeButton
        // aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={onHide}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
             Ask Your Question
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
        ...about the [product name - via product detail get req?]
          <SubmitQForm/>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SubmitQModal;
