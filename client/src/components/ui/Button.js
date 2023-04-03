import React from "react";
import styled from "styled-components";

const Button = ({ children, className, onClick, type }) => {
  const Component = styled.button`
    padding: 8px 16px;
    border-radius: 5px;
    border: none;
    font-size: 20px;
    padding: 12px 25px;
    cursor: pointer;
  `;
  return (
    <Component type={type} className={className} onClick={onClick}>
      {children}
    </Component>
  );
};

export default Button;
