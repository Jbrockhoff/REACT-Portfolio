import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import emailjs from 'emailjs-com';
import Button from 'react-bootstrap/Button'


function Contact() {
  const service_id = 'service_d74n8re';
  const template_id = 'template_vj17s95';
  const user_id = 'f8f3NtsfyGUgLfhSn';
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(service_id, template_id, e.target, user_id)
    e.target.reset()
  } 

  return (
    <div>
         <h4>
        I would love to hear from you! Please take a moment to fill out
        the following form so that I am able to contact you regarding any questions
        you may have.
      </h4>
      <br></br>
     <Form onSubmit={handleSubmit}>
     <Form.Group className="mb-3">
      <Form.Label htmlFor="basic-url">Your Information</Form.Label>
      </Form.Group>
      <InputGroup className="mb-3">
        <Form.Control
          name="from_name"
          placeholder="Name"
          aria-label="name"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="basic-url">Email</Form.Label>
        <InputGroup>
          <Form.Control id="basic-url" aria-describedby="basic-addon3"
          name="reply_to"
          placeholder="Email"
          aria-label="email"
         />
        </InputGroup>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label placeholder="Message">Message</Form.Label>
        <Form.Control as="textarea"
          name="message"
          placeholder="Message"
          aria-label="With textarea"
        />
      </Form.Group>

      <Button type="submit">Send</Button>

      </Form>
    </div>
  );
}

export default Contact;