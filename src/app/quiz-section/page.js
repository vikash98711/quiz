'use client'; 
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const images = [
  "https://th.bing.com/th/id/OIP.HNYFQfFAAtwzqLkItA3fRgHaEA?w=290&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
  "https://th.bing.com/th/id/OIP.HNYFQfFAAtwzqLkItA3fRgHaEA?w=290&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
  "https://th.bing.com/th/id/OIP.HNYFQfFAAtwzqLkItA3fRgHaEA?w=290&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
  "https://th.bing.com/th/id/OIP.HNYFQfFAAtwzqLkItA3fRgHaEA?w=290&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
  "https://th.bing.com/th/id/OIP.HNYFQfFAAtwzqLkItA3fRgHaEA?w=290&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
  "https://th.bing.com/th/id/OIP.HNYFQfFAAtwzqLkItA3fRgHaEA?w=290&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
];

const Page = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleShowModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <section className='Quiz-sectionWrapper py-5 p-5'>
      <div className='container'>
        <div className='row justify-content-center'>
          {/* Main Content Area */}
          <div className='col-lg-8'>
            <div className='row justify-content-center'>
              {images.map((image, index) => (
                <div className='col-md-4' key={index}>
                  <div className='card mb-4 shadow-sm' onClick={() => handleShowModal(image)}>
                    <div className='card-body text-center'>
                      <img src={image} alt={`Card ${index + 1}`} className='w-100' />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className='col-lg-4 mt-5 d-flex align-items-center justify-content-center'>
            <div className='card shadow-sm p-3 sticky-sidebar text-center'>
              <div className='card mb-4 shadow-sm'>
                <div className='card-body text-center'>
                  <h5 className='card-title'>Point</h5>
                </div>
              </div>
              <Button variant="warning" className='mt-2'>0</Button>{' '}
              <Button variant="success" className='mt-2'>Finish</Button>{' '}
              <Button variant="danger" className='mt-2'>How to Play?</Button>{' '}
              <p>Follow the instructions to win!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Question and Answers */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton style={{backgroundColor:'orange',color:'white'}}>
          <Modal.Title>Question !</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>This is a sample question for the selected image.</p>
          <Form>
            <Form.Check 
              type="radio"
              label="Option 1"
              name="answerOptions"
              id="option1"
            />
            <Form.Check 
              type="radio"
              label="Option 2"
              name="answerOptions"
              id="option2"
            />
            <Form.Check 
              type="radio"
              label="Option 3"
              name="answerOptions"
              id="option3"
            />
            <Form.Check 
              type="radio"
              label="Option 4"
              name="answerOptions"
              id="option4"
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
        
          <Button variant="primary" onClick={() => alert("Answer Submitted!")} className='santacolor mt-2'>Submit Answer</Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default Page;
