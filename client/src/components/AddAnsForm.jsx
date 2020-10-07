/* eslint-disable max-len */
import React, {useState} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Figure';

const AddAnsForm = ({onHide, question, getProductQs, answers}) => {
  const [state, setAForm] = useState({
    body: '',
    name: '',
    email: '',
    photos: [],
  });

  // STILL A BIT OF WORK TO DO HERE, NEED TO GET MY "SUBMIT MUTLIPLE PHOTOS" SECTION OF MY FORM SORTED
  const handleChange = (e) => {
    // console.log('HC', e.target);
    setAForm({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const fileSelectedHandler = (e) => {
    e.preventDefault();
    const files = e.target.files;
    setAForm({...state, photos: [...files]});
  };
  // {photos: [...state.photos, ...e.target.files]}
  // .photos or .value

  const handleSubmitA = (e) => {
    e.preventDefault();
    axios.post(`http://52.26.193.201:3000/qa/${question.question_id}/answers`, {...state})
        .then((res) => {
          // console.log(res.config.data);
          onHide();
          getProductQs(question.question_id);
        })
        .catch((err) => console.error(err));
  };

  return (
    <Form style={{borderRadius: '12px', marginBottom: '0px'}}
      onSubmit={handleSubmitA}
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
          Please enter your question before submitting.*
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="NicknameValidation">Nickname*
        <Form.Control required type="text" placeholder="Example:jackson11!"
          maxLength="60"
          name="name"
          value={state.name}
          onChange={handleChange}
          // onChange={(e)=> handleChange(e)}
        />
        <Form.Control.Feedback type="invalid">
          Please enter a nickname.*
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

      <Form.Group>
        <Form.File id="exampleFormControlFile1" label="Submit photo(s)"
          className="position-relative"
          name="photos"
          multiple
          value={state.photos}
          onChange={fileSelectedHandler}
          // isInvalid={!!errors.file}
          // feedback={errors.file}
          // feedbackTooltip
        />
        {/* {console.log(state.photos)} */}
        {/* {state.photos.length ? state.photos.map((photo, i) => <Image key={i}
        // thumbnail
          alt="your img thumbnail"
          src={state.photo}>
          <Image/>
        </Image>) : []} */}
      </Form.Group>

      <Button variant="dark" type="submit">
       Submit
      </Button>
    </Form>
  );
};

export default AddAnsForm;


// const [image, setImage] = useState({preview: '', raw: ''});
// const handleChange = (e) => {
//   if (e.target.photos.length) {
//     setImage({
//       preview: URL.createObjectURL(e.target.files[0]),
//       raw: e.target.files[0],
//     });
//   }
// };
