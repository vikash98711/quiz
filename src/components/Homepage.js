'use client';

import { url } from '@/utils/url';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'; 

const Homepage = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false); 
  const router = useRouter();

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrorMessage(''); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); 

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

      // Store email in local storage
      localStorage.setItem("useremail", email);

      // Close the modal
      handleClose();

      // Redirect to quiz section
      router.push('/quiz-section'); 

    } catch (error) {
      setErrorMessage('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false); 
    }
  };

  return (
    <>
      <div className='home-banner-santa p-5'>
        <div className='PlayButton-wrapper'>
          <div style={{ position: 'relative' }} className='mt-5'>
            <div>
              <div className="button play-game">
                <img src="/new.png" className='zoom' onClick={handleShow}/>
              </div>
            </div>
          </div>
        </div>
     
        <div className={`modal ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }}>
          <div className="modal-dialog modal-dialog-centered p-3">
            <div className="modal-content play-now-page-space" style={{ boxShadow: '35px 40px #9d2931' }} >
              <div className="modal-header justify-content-between">
                <h5 className="modal-title santawcolor">Register yourself on Santa's List</h5>
                <i className="fa fa-times-circle" onClick={handleClose}></i>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="formBasicEmail">Enter Work Email Id</label>
                    <input
                      type="email"
                      className="form-control"
                      id="formBasicEmail"
                      placeholder="Enter your email"
                      value={email}
                      onChange={handleEmailChange}
                      required
                    />
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
