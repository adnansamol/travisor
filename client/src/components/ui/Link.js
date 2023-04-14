import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

const Link = ({ to, children, className }) => {
  const Component = styled(RouterLink)`
    text-decoration: none;
  `;
  return (
    <Component className={className} to={to}>
      {children}
    </Component>
  );
};

export default Link;
