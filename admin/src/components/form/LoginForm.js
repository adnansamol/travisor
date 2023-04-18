import React from "react";

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
  return (
    <form onSubmit={loginAgencyHandler}>
      <div>
        <label>Email</label>
        <input name="email" />
      </div>
      <div>
        <label>Password</label>
        <input name="pass" />
      </div>
      <input type="submit" />
    </form>
  );
};

export default LoginForm;
