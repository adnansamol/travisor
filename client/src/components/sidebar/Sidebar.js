import React from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import { colors } from "../../constant/colors";
import Link from "../ui/Link";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 15px;
  height: fit-content;
  width: 300px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: white;
`;
const NavLink = styled(Link)`
  border-bottom: 1px solid;
  padding: 10px 5px;
  color: ${colors.black};
  font-weight: 600;
`;
const ActiveLink = styled(Link)`
  border-bottom: 1px solid ${colors.black};
  padding: 10px 5px;

  font-weight: 600;
`;
const Sidebar = (props) => {
  const { pathname } = useLocation();
  return (
    <Container>
      {props.links &&
        props.links.map((link) =>
          pathname == "/package/" + props.id + "/" + link.toLowerCase() ? (
            <ActiveLink to={"/package/" + props.id + "/" + link.toLowerCase()}>
              {link}
            </ActiveLink>
          ) : (
            <NavLink to={"/package/" + props.id + "/" + link.toLowerCase()}>
              {link}
            </NavLink>
          )
        )}
    </Container>
  );
};

export default Sidebar;
