import React, {useState} from 'react';
import {Figure, Modal, Row} from 'react-bootstrap';

const AnswerPhoto = ({answer}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const [clicked, setClick] = useState('');
  const handleShow = (url) => {
    setClick(url);
    setShow(true);
  };

  const mappedPhotos = answer.photos.length ? answer.photos.map((photo, i) =>
    <div key={i}>
      <Figure>
        <Figure.Image
          width={100}
          height={100}
          style={{padding: '4px', borderRadius: '8px', cursor: 'pointer'}}
          alt="user img of product"
          src={photo}
          onClick={() => handleShow(photo)}
        />
        <Modal
          centered
          show={show}
          onHide={handleClose}
          src={clicked}
        >
          <Figure.Image
            width={500}
            height={400}
            // eslint-disable-next-line max-len
            style={{padding: '4px', borderRadius: '8px', cursor: 'pointer', marginBottom: '0px', border: '10px solid blue !important'}}
            alt="user img of product"
            src={clicked}
            onClick={() => handleClose()}
          />
        </Modal>
      </Figure>
    </div> ) : '';

  return (
    <Row>
      {mappedPhotos}
    </Row>
  );
};

export default AnswerPhoto;
