import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Contact() {
  return (
    <div>
         <h3>
        I would love to hear from you! Please take a moment to fill out
        the following form so that I am able to contact you regarding any questions
        you may have.
      </h3>
     
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

      <Form.Group className="mb-3">
        <Form.Label htmlFor="basic-url">Email</Form.Label>
        <InputGroup>
          <Form.Control id="basic-url" aria-describedby="basic-addon3"
          placeholder="Email"
          aria-label="email"
         />
        </InputGroup>
      </Form.Group>

      <InputGroup>
        <InputGroup.Text>Message</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" />
      </InputGroup>
    </div>
  );
}

export default Contact;