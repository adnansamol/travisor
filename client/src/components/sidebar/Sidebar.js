import React from "react";
import styled from "styled-components";
import Link from "../ui/Link";

const Container = styled.div`
  width: 400px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: white;
`;

const Sidebar = (props) => {
  return (
    <Container>
      {props.links &&
        props.links.map((link) => (
          <Link to={"/package/" + props.id + "/" + link.toLowerCase()}>
            {link}
          </Link>
        ))}
    </Container>
  );
};

export default Sidebar;
