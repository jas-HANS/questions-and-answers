import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SubmitQForm = ({getId}) => {
  // const [validated, setValidated] = useState(false);

  const [state, setState] = useState({
    body: '',
    nickname: '',
    email: '',
  });

  const handleSubmit = (getId, e) => {
    // const form = e.currentTarget;
    // if (form.checkValidity() === false) {
    //   e.preventDefault();
    //   e.stopPropagation();
    // }
    // setValidated(true);
    e.preventDefault();
    axios.post(`http://52.26.193.201:3000/qa/${getId}`, state)
        .then((res) => {
          setState({
            body: state.body,
            nickname: state.nickname,
            email: state.email,
          });
        })
        .catch((err) => console.error(err));
  };

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Form style={{borderRadius: '12px', marginBottom: '0px'}}
      onSubmit={handleSubmit}
      // noValidate validated={validated}
    >
      <Form.Group controlId="form.TextAreaValidation">
        <Form.Label></Form.Label>
        <Form.Control required as="textarea" rows="3"
          maxLength="1000"
          name="body"
          value={state.body}
          onChange={handleChange}
        />
        <Form.Control.Feedback type="invalid">
          Please enter your question before submitting.
        </Form.Control.Feedback>
      </Form.Group>


      <Form.Group controlId="NicknameValidation">Nickname
        <Form.Control required type="text" placeholder="Example:jackson11!"
          maxLength="60"
          name="nickname"
          value={state.nickname}
          onChange={handleChange}
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
          placeholder="Why did you like the product or not?"
          name="email"
          value={state.email}
          onChange={handleChange}
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

export default SubmitQForm;
