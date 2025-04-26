import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/authSlice";

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

// const Link = styled.span`
//   color: green;
//   cursor: pointer;
//   font-weight: bold;
// `;

const LoginForm = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const { isLoading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login:", form);

    await dispatch(loginUser(form)).then((response) => {
      if (response.error) {
        alert("Login failed: " + response.error.message);
      } else {
        alert("Login successful!");
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
      <Title>Welcome Back</Title>
      <SubTitle>Login to continue your journey</SubTitle>

      <GoogleButton onClick={() => alert("Google Login Placeholder")}>
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
        <Label htmlFor="email">Email*</Label>
        <Input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />

        <Label htmlFor="password">Password*</Label>
        <Input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Enter your password"
          required
          autoComplete="off"
        />

        <Button type="submit"> {isLoading ? "Logging in..." : "Login"}</Button>
      </form>

      <Footer>
        Don’t have an account? <Link to="/signup">Sign up</Link>
      </Footer>
    </Container>
  );
};

export default LoginForm;
