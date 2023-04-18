import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <div class="navbar-brand" href="#">
          Admin Dashboard
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
