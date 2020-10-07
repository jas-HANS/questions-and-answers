/* eslint-disable max-len */
import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SubmitQForm from './SubmitQForm.jsx';

const SubmitButton = ({question, productName, getId, getProductQs
}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button id="addq-btn"variant="secondary" size="md"
        onClick={handleShow}
      >ADD A QUESTION
      </Button>

      <Modal
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
             Ask Your Question
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
        ...about the {productName}
          <SubmitQForm
            getId={getId}
            getProductQs={getProductQs}
            onHide={handleClose}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SubmitButton;
