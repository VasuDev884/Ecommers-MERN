import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignUpUser } from "../../redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Error,
  GoogleButton,
  Label,
  Input,
  Footer,
  Button,
  Title,
  SubTitle,
  Or,
  Form,
} from "./Style";

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

      <Form onSubmit={handleSubmit}>
        <Label htmlFor="name">
          Name <span>*</span>
        </Label>
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

        <Label htmlFor="email">
          Email <span>*</span>
        </Label>
        <Input
          type="email"
          name="email"
          autoComplete="off"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />

        <Label htmlFor="password">
          Password <span>*</span>
        </Label>
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
          {isLoading ? "Signing in..." : "Sign up"}
        </Button>
      </Form>

      <Footer>
        Already have an account? <Link to="/login">Log in</Link>
      </Footer>
    </Container>
  );
};

export default SignupForm;
