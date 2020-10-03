import React from 'react';
import {Modal} from 'react-bootstrap';
import SubmitQForm from './SubmitQForm.jsx';

const SubmitQModal = ({show, question, onHide, productName}) => {
  return (
    <div>
      <Modal closeButton
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
        ...about the
          {/* {productName} */}
          {/* useEffect && axios.get(`http://52.26.193.201:3000/products/5`) */}
          <SubmitQForm/>
        </Modal.Body>
      </Modal>
    </div>
  );
};

// export default SubmitQModal;

