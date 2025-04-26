import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { SignUpUser } from "../../redux/authSlice";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
  max-width: 400px;
  margin: 100px auto auto auto;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  font-family: sans-serif;
`;

const Title = styled.h2`
  text-align: center;
`;

const SubTitle = styled.p`
  text-align: center;
  color: #777;
`;

const GoogleButton = styled.button`
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

const Or = styled.div`
  text-align: center;
  margin: 1rem 0;
  color: #888;
  font-size: 14px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  &:focus {
    border-color: #000;
    outline: none;
  }
`;

const Label = styled.label`
  display: block;
  margin-top: 1rem;
  font-weight: 500;
`;

const CheckboxContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Button = styled.button`
  width: 100%;
  margin-top: 1.5rem;
  padding: 12px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;

const Footer = styled.p`
  text-align: center;
  margin-top: 1rem;
  font-size: 14px;
  color: #555;
`;

const Error = styled.div`
  color: red;
  text-align: center;
  margin-top: 1rem;
  border: 1px solid red;
  padding: 10px;
  border-radius: 8px;
  background-color: #ffe6e6;
`;

// const Link = styled(Link)`
//   color: green;
//   cursor: pointer;
//   font-weight: bold;
// `;

const SignupForm = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const isFormValid = () => {
    return form.fullName && form.email && form.password;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid()) return;
    console.log("Submitted:", form);

    await dispatch(SignUpUser(form)).then((response) => {
      if (response.error) {
        alert("Sign failed: " + response.error.message);
      } else {
        alert("Sign successful!");
        if (response.payload?.role === "admin") {
          navigate("/admin", { replace: true });
        } else if (response.payload?.role === "customer") {
          navigate("/", { replace: true });
        } else if (response.payload?.role === "worker") {
          navigate("/worker", { replace: true });
        }
      }
    });
  };

  return (
    <Container>
      <Title>Create your account</Title>
      <SubTitle>Let’s get started with your 30 days free trial</SubTitle>

      <GoogleButton onClick={() => alert("Google Auth Placeholder")}>
        <img
          src="https://developers.google.com/identity/images/g-logo.png"
          alt="G"
          width="20"
        />
        Login with Google
      </GoogleButton>

      <Or>or</Or>

      {error && <Error>{error}</Error>}

      <form onSubmit={handleSubmit}>
        <Label htmlFor="name">Name*</Label>
        <Input
          name="fullName"
          type="text"
          autoComplete="off"
          autoFocus
          maxLength={20}
          value={form.fullName}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />

        <Label htmlFor="email">Email*</Label>
        <Input
          type="email"
          name="email"
          autoComplete="off"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />

        <Label htmlFor="password">Password*</Label>
        <Input
          type="password"
          name="password"
          maxLength={10}
          minLength={6}
          value={form.password}
          onChange={handleChange}
          placeholder="Enter your password"
          required
          autoComplete="off"
        />

        <Button type="submit" disabled={!isFormValid()}>
          {isLoading ? "Sign in..." : "Sign up"}
        </Button>
      </form>

      <Footer>
        Already have an account? <Link to="/login">Log in</Link>
      </Footer>
    </Container>
  );
};

export default SignupForm;
