import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Contact() {
  return (
    <div>
         <h4>
        I would love to hear from you! Please take a moment to fill out
        the following form so that I am able to contact you regarding any questions
        you may have.
      </h4>
      <br></br>
     
     <Form.Group className="mb-3">
      <Form.Label htmlFor="basic-url">Your Information</Form.Label>
      </Form.Group>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="First Name"
          aria-label="firstname"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <InputGroup className="mb-3">   
        <Form.Control
          placeholder="Last Name"
          aria-label="lastname"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <br></br>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="basic-url">Email</Form.Label>
        <InputGroup>
          <Form.Control id="basic-url" aria-describedby="basic-addon3"
          placeholder="Email"
          aria-label="email"
         />
        </InputGroup>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label placeholder="Message">Message</Form.Label>
        <Form.Control as="textarea"
          placeholder="Message"
          aria-label="With textarea"
        />
      </Form.Group>
    </div>
  );
}

export default Contact;