'use client';

import { url } from '@/utils/url';
import React, { useState, useEffect } from 'react';

const Homepage = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensure the component only renders the modal on the client
    setIsClient(true);
  }, []);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(`${url}/api/user`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      setEmail('');
      handleClose();
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <>
      <div className='home-banner-santa p-5'>
        <div className='PlayButton-wrapper'>
          <h2 className='text-white'>SANTA'S</h2>
          <h1 className='text-white fs-70'>SCRABBLE WORDS</h1>
          <p className='text-white'>Even The Santa Needs A Good Policy!</p>
          <div style={{ position: 'relative' }} className='mt-5'>
            <div>
              <div className="button play-game">
                <a href="#" onClick={handleShow}>Play Now</a>
              </div>
            </div>
            <div className='santa-cap'>
              <img
                className='img-fluid'
                width='152px'
                src='https://icons.veryicon.com/png/Holiday/Christmas%20Graphics/santa%20hat.png'
                alt="Santa's Hat"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Render modal only if on the client */}
      {isClient && showModal && (
        <div className="modal show" style={{ display: 'block' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header justify-content-between">
                <h5 className="modal-title santawcolor">Register yourself on Santa's List!</h5>
                <button type="button" className="close" onClick={handleClose} style={{ border: 'none', backgroundColor: 'white' }}>
                  <span>&times;</span>
                </button>
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
                    <small className="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <button type="submit" className='btn btn-primary santacolor mt-2'>
                    Start Game
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Homepage;
