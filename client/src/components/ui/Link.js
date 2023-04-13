import { Link as RouterLink } from "react-router-dom";

const Link = ({ to, children, className }) => {
  return (
    <RouterLink
      className={className}
      to={to}
      style={{ textDecoration: "none" }}
    >
      {children}
    </RouterLink>
  );
};

export default Link;
