import React from "react";

const LoginForm = () => {
  return (
    <div>
      <form>
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
