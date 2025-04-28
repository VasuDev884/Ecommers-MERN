import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/authSlice";
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

const LoginForm = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const { isLoading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const isFormValid = () => {
    return form.email && form.password;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid()) return;
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

      <Form onSubmit={handleSubmit}>
        <Label htmlFor="email">
          Email <span>*</span>
        </Label>
        <Input
          id="email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
          autoFocus
        />

        <Label htmlFor="password">
          Password <span>*</span>
        </Label>
        <Input
          id="password"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Enter your password"
          required
          autoComplete="off"
        />

        <Button type="submit" disabled={!isFormValid()}>
          {" "}
          {isLoading ? "Logging in..." : "Login"}
        </Button>
      </Form>

      <Footer>
        Don’t have an account? <Link to="/signup">Sign up</Link>
      </Footer>
    </Container>
  );
};

export default LoginForm;
