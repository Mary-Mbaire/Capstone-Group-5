import React from 'react';
import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';

const FloatingContainer = styled.div`
  position: fixed;
  bottom: 200px;
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

  const handleClick = () => {
   console.log("helooo world");
  };

  return (
    <FloatingContainer onClick={handleClick}>
      <FaPlus size={24} />
    </FloatingContainer>
  );
};

export default FloatingComponent;
