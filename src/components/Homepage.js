'use client';

import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const Homepage = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleClose();
  };

  return (
    <>
      <div className='home-banner-santa p-5'>
     
      </div>
        <div className='PlayButton-wrapper'>
    
          <h2 className='text-white'>SANTA'S</h2>
          <h1 className='text-white fs-70'>SCRABBLE WORDS</h1>
          <p className='text-white'>Even The Santa Needs A Good Policy!</p>
          <div style={{position:'relative'}} className='mt-5'>
          {/* <div ontouchstart=""> */}
          <div>
  <div className="button">
    <a href="#">Play Now</a>
  </div>
</div>
          <div className='santa-cap'>
      <img className=' img-fluid' width='152px' src='https://icons.veryicon.com/png/Holiday/Christmas%20Graphics/santa%20hat.png' />

          </div>

        </div>
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className='santawcolor'> Registered yourself on Santa's List!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Enter Work Email Id</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                required
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit" className='santacolor mt-2'>
              Start Game
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Homepage;

