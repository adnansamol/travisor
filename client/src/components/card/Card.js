import React from "react";
import styled from "styled-components";

const Card = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export default Card;
