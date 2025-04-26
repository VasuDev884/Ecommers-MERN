import styled from "styled-components";

export const Container = styled.div`
  max-width: 400px;
  margin: 100px auto 50px auto;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.h2`
  text-align: center;
`;

export const SubTitle = styled.p`
  text-align: center;
  color: #777;
`;

export const GoogleButton = styled.button`
  background: white;
  border: 1px solid #ccc;
  padding: 10px;
  width: 100%;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Or = styled.div`
  text-align: center;
  color: #888;
  font-size: 14px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  &:focus {
    border-color: #000;
    outline: none;
  }
`;

export const Label = styled.label`
  display: block;
  font-weight: 500;
  span {
    color: red;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const Footer = styled.p`
  text-align: center;
  font-size: 14px;
  color: #555;
`;

export const Error = styled.div`
  color: red;
  text-align: center;
  border: 1px solid red;
  padding: 10px;
  border-radius: 8px;
  background-color: #ffe6e6;
`;
