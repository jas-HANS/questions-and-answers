import React, {useState} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddAnsForm = ({onHide}) => {
  // const [state, setAForm] = useState({
  //   body: '',
  //   name: '',
  //   email: '',
  //   photos: [],
  // });

  // const handleChange = (e) => {
  //   setAForm({
  //     ...state,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSubmitA = (qId, e) => {
  //   e.preventDefault();
  //   axios.post(`http://52.26.193.201:3000/qa/${qId}/answers`, {...state})
  //       .then((res) => {
  //         console.log(res);
  //         onHide();
  //         getProductQs(getId);
  //       })
  //       // .then()
  //       // reset the questions to include this Q
  //       .catch((err) => console.error(err));
  // };



  return (
    <Form style={{borderRadius: '12px', marginBottom: '0px'}}
      // onSubmit={handleSubmitQ}
      // onSubmit={(e)=> handleSubmitQ(e)}
      // noValidate validated={validated}
    >
      <Form.Group controlId="form.TextAreaValidation">
        <Form.Label></Form.Label>
        <Form.Control required as="textarea" rows="3"
          maxLength="1000"
          name="body"
          // value={state.body}
          // onChange={handleChange}
          // onChange={(e)=> handleChange(e)}
        />
        <Form.Control.Feedback type="invalid">
         Your Answer
        </Form.Control.Feedback>
      </Form.Group>


      <Form.Group controlId="NicknameValidation">Nickname
        <Form.Control required type="text" placeholder="Example:jackson11!"
          maxLength="60"
          name="name"
          // value={state.name}
          // onChange={handleChange}
          // onChange={(e)=> handleChange(e)}
        />
        <Form.Control.Feedback type="invalid">
          Please enter a nickname..
        </Form.Control.Feedback>

        <Form.Text className="text-muted">
        For privacy reasons, do not use your full name or email address.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="EmailValidation">
        Email address
        <Form.Control required type="email" maxLength="60"
          placeholder="Email address"
          name="email"
          // value={state.email}
          // onChange={handleChange}
          // onChange={(e)=> handleChange(e)}
        />
        <Form.Control.Feedback type="invalid">
          Please enter your email address..
        </Form.Control.Feedback>
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

export default AddAnsForm;
