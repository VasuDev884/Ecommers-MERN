// Loader.jsx
import React from "react";
import styled, { keyframes } from "styled-components";

// Keyframes for the animation
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Styled Loader Container
const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

// Styled spinning circle
const Spinner = styled.div`
  border: 6px solid #f3f3f3;
  border-top: 6px solid #4f46e5;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${spin} 1s linear infinite;
`;

const Loader = () => {
  return (
    <LoaderWrapper>
      <Spinner />
    </LoaderWrapper>
  );
};

export default Loader;
