import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../constant/colors";
const LoginForm = ({ loginAgency }) => {
  const loginAgencyHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      email: form.email.value,
      password: form.pass.value,
    };
    loginAgency(data);
  };

  const Form = styled.form`
    width: 400px;
    margin: 100px auto;
    background-color: ${colors.orange50};
    padding: 10px 15px;
    border-radius: 10px;
  `;

  return (
    <Form onSubmit={loginAgencyHandler}>
      <h1 style={{ textAlign: "center" }}>Login</h1>
      <div>
        <label className="form-label">Email</label>
        <input className="form-control" name="email" type="email" required />
      </div>
      <div>
        <label className="form-label">Password</label>
        <input className="form-control" name="pass" type="password" required />
      </div>
      <p className="my-2">
        Don't Have an account? <Link to="/register">Sign up</Link> here.
      </p>
      <input className="btn btn-warning my-2" type="submit" />
    </Form>
  );
};

export default LoginForm;
