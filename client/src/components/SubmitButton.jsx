import React, {useState} from 'react';
import Button from 'react-bootstrap/Button'
import SubmitQModal from './SubmitQModal.jsx';

const SubmitButton = ({question}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button id="addq-btn"variant="secondary" size="md"
        onClick={handleShow}
      >ADD A QUESTION
      </Button>

      <SubmitQModal
        show={show}
        question={question}
        onHide={handleClose}
      />
    </div>
  );
};

export default SubmitButton;
