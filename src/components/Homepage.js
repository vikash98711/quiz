'use client';

import { url } from '@/utils/url';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome CSS

const Homepage = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Loading state for spinner
  const router = useRouter();

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrorMessage(''); // Clear error message on new input
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading spinner

    try {
      const response = await fetch(`${url}/api/user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const responseData = await response.json();

      if (!response.ok) {
        setErrorMessage(responseData.message || 'An error occurred. Please try again.');
        setIsLoading(false);
        return;
      }

      setEmail('');
      handleClose();
      router.push('/quiz-section'); // Navigate to the next page

    } catch (error) {
      setErrorMessage('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false); // Stop loading spinner
    }
  };

  return (
    <>
      <div className='home-banner-santa p-5'>
        <div className='PlayButton-wrapper'>
        <h2 className='text-white fade-in' style={{textShadow:'2px 2px rgb(247 98 79)'}}>SANTAS</h2>
  <h1 className='text-white fs-70 slide-up'style={{textShadow:'2px 2px rgb(247 98 79)'}}>SCRABBLE WORDS</h1>
  <p className='text-white fade-in'style={{textShadow:'2px 2px rgb(247 98 79)'}}>Even The Santa Needs A Good Policy!</p>
          <div style={{ position: 'relative' }} className='mt-5'>
            <div>
              <div className="button play-game">
                <a className='zoom' href="#" onClick={handleShow} style={{textShadow:'2px 2px rgb(247 98 79)'}}>Play Now <i className="fa fa-play"></i></a>
              </div>
            </div>
            <div className='santa-cap'>
              <img
                className='img-fluid bounce'
                width='152px'
                src='https://icons.veryicon.com/png/Holiday/Christmas%20Graphics/santa%20hat.png'
                alt="Santa's Hat"
              />
            </div>
          </div>
        </div>

        {/* Modal */}
        <div className={`modal ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }}>
          <div className="modal-dialog modal-dialog-centered p-3">
            <div className="modal-content play-now-page-space " style={{boxShadow:'35px 40px #9d2931'}} >
              <div className="modal-header justify-content-between" >
                <h5 className="modal-title santawcolor">Register yourself on Santas List </h5>
                {/* <button type="button" className="close" onClick={handleClose} style={{ border: 'none', backgroundColor: 'white' }}>
                  <span>&times;</span>
                </button> */}
                <i className="fa fa-times-circle" onClick={handleClose}></i>

              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="formBasicEmail">Enter Work Email Id </label>
                    <input
                      type="email"
                      className="form-control"
                      id="formBasicEmail"
                      placeholder="Enter your email"
                      value={email}
                      onChange={handleEmailChange}
                      required
                    />
                    {/* <small className="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small> */}
                    {errorMessage && (
                      <div className="text-danger mt-3">
                        {errorMessage}
                      </div>
                    )}
                  </div>
                  <button type="submit" className='btn btn-primary santacolor mt-3' disabled={isLoading}>
                    {isLoading ? (
                      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    ) : (
                      'Start Game'
                    )}
                    
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
