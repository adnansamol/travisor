import React from "react";
import { ImEarth } from "react-icons/im";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Logo = styled.div`
  display: inline-block;
  position: relative;

  width: fit-content;
  color: white;
  font-size: 30px;
  font-weight: 600;
  font-family: "Alatsi", sans-serif;
`;
const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <div class="navbar-brand">
          <Logo to="/">
            travis
            <ImEarth size={20} />r
          </Logo>
        </div>
        <div class=" navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link" aria-current="page" to={"/"}>
                Home
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" aria-current="page" to={"/bookings"}>
                Bookings
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" aria-current="page" to={"/profile"}>
                Profile
              </Link>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
