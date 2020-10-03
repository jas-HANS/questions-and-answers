import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import SubmitQModal from './SubmitQModal.jsx';
import SubmitQForm from './SubmitQForm.jsx';
// import QuestionList from './QuestionList.jsx';


const SubmitButton = ({question, productName, getId}) => {
  // console.log(qList);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button id="addq-btn"variant="secondary" size="md"
        onClick={handleShow}
        question={question}
      >ADD A QUESTION
      </Button>

      <Modal
        centered
        question={question}
        show={show}
        onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
             Ask Your Question
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
        ...about the {productName}
          <SubmitQForm
            getId={getId}/>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SubmitButton;
