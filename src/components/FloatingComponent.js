import React, { useState } from 'react';
import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';
import TransactionForm from '../pages/TransactionForm'; // Import the TransactionForm component
import '../style/Modal.css'; // Import the CSS file for the modal

const FloatingContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #6200ea;
  color: white;
  padding: 1rem;
  border-radius: 50%;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const FloatingComponent = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <FloatingContainer onClick={handleClick}>
        <FaPlus size={24} />
      </FloatingContainer>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <TransactionForm closeModal={closeModal} />
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingComponent;
