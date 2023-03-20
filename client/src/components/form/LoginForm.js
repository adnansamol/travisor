import React from "react";

const LoginForm = ({ loginUserHandler }) => {
  const loginOnSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = {
      email: form.email.value,
      password: form.pass.value,
    };
    loginUserHandler(data);
  };
  return (
    <div>
      <form onSubmit={loginOnSubmit}>
        <label htmlFor="email">Email</label>
        <input id="email" />
        <label htmlFor="pass">Password</label>
        <input id="pass" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default LoginForm;
