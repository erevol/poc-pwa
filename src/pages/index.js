import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import threeDotsSrc from '../images/three-dots.png';
import iconSrc from '../images/icon.png';
import Cookies from 'js-cookie';

const PWA_INSTALL_MODAL_SHOWN = 'pwa-install-modal-shown';

const InstallModal = ({ isOpen, onRequestClose }) => {
  const handleClose = () => {
    onRequestClose();
    // Set a cookie to remember that the user has seen the modal
    Cookies.set(PWA_INSTALL_MODAL_SHOWN, 'true', { expires: 1 });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      contentLabel="Install PWA POC"
      style={{
        content: {
          top: '30px',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          // marginRight: '-50%',
          transform: 'translate(-50%, 0)',
          width: '300px',
        },
      }}
    >
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}>
        <h1>
          Add to home screen
        </h1>
        <img src={iconSrc} alt="App Icon" style={{width: '48px'}} />
        <h2>Install PWA POC on your phone's home screen</h2>
        <p>
          Tap the <img src={threeDotsSrc} alt="Three Dots Icon" style={{width: '16px'}} /> and Add to home screen.
        </p>
        <button
          onClick={handleClose}
          style={{
            boxSizing: 'border-box',
            margin: '0',
            textAlign: 'center',
            height: '36px',
            padding: '3px 18px',
            fontSize: '13px',
            lineHeight: '1.2em',
            fontWeight: '500',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            borderRadius: '10px',
            width: '100%',
            background: '#6236FF',
            color: '#FFFFFF',
            cursor: 'pointer',
            border: 'none',
          }}
        >Close</button>
      </div>
    </Modal>
  );
};

const IndexPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  console.log('debug modalIsOpen', modalIsOpen);

  useEffect(() => {
    // Check if the cookie is set, if not, show the modal
    const pwaInstallModalShown = Cookies.get(PWA_INSTALL_MODAL_SHOWN);
    if (!pwaInstallModalShown) {
      // Show the modal on page load
      setModalIsOpen(true);
    }
  }, []);

  return (
    <main style={{ fontFamily: 'sans-serif'}}>
      <div style={{ margin: '30px', color: '#2d3436'}}>
        <h1>Proof of Concept 👋</h1>
        <h2>What is a Progressive Web App?</h2>
        <p>“Progressive web app” (PWA) is both a general term for a new philosophy toward building websites and a specific term with an established set of three explicit, testable, baseline requirements.</p>
      </div>
      <InstallModal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
