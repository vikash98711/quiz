'use client';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const images = [
  "/horse.jpg",
  "/horse.jpg",
  "/horse.jpg",
  "/horse.jpg",
  "/horse.jpg",
  "/horse.jpg"

];

const Page = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');

  const handleShowModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedOption(''); // Reset the selected option when closing
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

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
              <button className='btn btn-warning mt-2'>0</button>
              <button className='btn btn-success mt-2'>Finish</button>
              <button className='btn btn-danger mt-2'>How to Play?</button>
              <p>Follow the instructions to win!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Question and Answers */}
      {showModal && (
        <div className="modal show" style={{ display: 'block' }} onClick={handleCloseModal}>
          <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <div className="modal-header justify-content-between" style={{ backgroundColor: 'orange', color: 'white' }}>
                <h5 className="modal-title">Question !</h5>
                <button type="button" className="close" onClick={handleCloseModal} style={{border:'none', backgroundColor:'#FFA500'}}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>This is a sample question for the selected image.</p>
                <form>
                  {['option1', 'option2', 'option3', 'option4'].map((option, index) => (
                    <div className="form-check" key={index}>
                      <input
                        type="radio"
                        className="form-check-input"
                        name="answerOptions"
                        id={option}
                        value={option}
                        checked={selectedOption === option}
                        onChange={handleOptionChange}
                      />
                      <label className="form-check-label" htmlFor={option}>Option {index + 1}</label>
                    </div>
                  ))}
                </form>
              </div>
              <div className="modal-footer">
                <button className='btn btn-primary' onClick={() => {
                  alert(`Answer Submitted: ${selectedOption}`);
                  handleCloseModal(); // Close modal after submission
                }}>
                  Submit Answer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showModal && <div className="modal-backdrop fade show"></div>}
    </section>
  );
};

export default Page;
