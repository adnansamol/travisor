import React from "react";
import styled from "styled-components";

const Component = styled.button`
  padding: 8px 16px;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    filter: brightness(90%);
  }
`;
const Button = ({ children, className, onClick, type }) => {
  return (
    <Component type={type} className={className} onClick={onClick}>
      {children}
    </Component>
  );
};

export default Button;
