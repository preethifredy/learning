'use client'
import React, { useState } from 'react';

const ModalPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>

      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>Modal Content</h2>
            <p>This is the content of the modal popup.</p>
          </div>
        </div>
      )}

      <style jsx>{`
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .modal-content {
          background-color: #fff;
          padding: 20px;
          border-radius: 5px;
          max-width: 400px;
          max-height: 400px;
        }

        .close {
          position: absolute;
          top: 10px;
          right: 10px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default ModalPopup;
