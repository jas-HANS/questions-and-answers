import React, {useState} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import {Form, FormFile} from 'react-bootstrap/Form';

const AddAnsForm = ({onHide, question,
  getId, getProductQs
}) => {
  const [state, setAForm] = useState({
    body: '',
    name: '',
    email: '',
    // photos: [],
  });

  const handleChange = (e) => {
    setAForm({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitA = (e) => {
    e.preventDefault();
    axios.post(`http://52.26.193.201:3000/qa/${question.question_id}/answers`, {...state})
        .then((res) => {
          console.log(res);
          onHide();
          getProductQs(getId);
        })
        // .then()
        // reset the questions to include this Q
        .catch((err) => console.error(err));
  };


  // POST /qa/:question_id/answers

  // Parameter, type, description
  // body / text / Text of question being asked
  // name / text / Username for question asker
  // email / text / Email address for question asker
  // photos / [text] / An array of urls corresponding to images to display


  return (
    <Form style={{borderRadius: '12px', marginBottom: '0px'}}
      onSubmit={handleSubmitA}
      // onSubmit={(e)=> handleSubmitQ(e)}
      // noValidate validated={validated}
    >
      <Form.Group controlId="form.TextAreaValidation">
        <Form.Label></Form.Label>
        <Form.Control required as="textarea" rows="3"
          maxLength="1000"
          name="body"
          value={state.body}
          onChange={handleChange}
          // onChange={(e)=> handleChange(e)}
        />
        <Form.Control.Feedback type="invalid">
         Your Answer*
        </Form.Control.Feedback>
      </Form.Group>


      <Form.Group controlId="NicknameValidation">Nickname*
        <Form.Control required type="text" placeholder="Example:jack543!"
          maxLength="60"
          name="name"
          value={state.name}
          onChange={handleChange}
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
        Email address*
        <Form.Control required type="email" maxLength="60"
          placeholder="Example: jack@email.com"
          name="email"
          value={state.email}
          onChange={handleChange}
          // onChange={(e)=> handleChange(e)}
        />
        <Form.Control.Feedback type="invalid">
          Please enter your email address..
        </Form.Control.Feedback>
        <Form.Text className="text-muted">
          For authentication reasons, you will not be emailed.
        </Form.Text>
      </Form.Group>

      {/* <Form.Group>
        <Form.File id="exampleFormControlFile1" label="Submit photo(s)"
          className="position-relative"
          name="photos"
          // value={state.photos}
          // onChange={handleChange}
          // isInvalid={!!errors.file}
          // feedback={errors.file}
          // feedbackTooltip
        />
        <FormFile.Input multiple />
      </Form.Group> */}
      <Button variant="dark" type="submit">
       Submit
      </Button>
    </Form>
  );
};

export default AddAnsForm;
