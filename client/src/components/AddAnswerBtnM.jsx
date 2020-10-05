import React, {useState} from 'react';
import Alert from 'react-bootstrap/Alert';
import Modal from 'react-bootstrap/Modal';
// import AnswerList from './AnswerList.jsx';
import AddAnsForm from './AddAnsForm.jsx';

const AddABtn = ({question, productName,
  // getProductQs,
  answers
  // getId,
}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Alert.Link
        className="add-answer"
        variant="dark"
        size="sm"
        onClick={handleShow}
      >Add Answer
      </Alert.Link>
      <Modal
        centered
        show={show}
        onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
             Submit Your Answer
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {productName}: {question.question_body}
          <AddAnsForm
            // getId={getId}
            // getProductQs={getProductQs}
            onHide={handleClose}
            question={question}
            answers={answers}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddABtn;
