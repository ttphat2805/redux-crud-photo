import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto">
            <Link to="/">
              <p className="header__title">React Redux App</p>
            </Link>
          </Col>

          <Col xs="auto">
            <NavLink
              exact="true"
              className="header__link"
              to="/sign-in"
              activeclassname="header__link--active"
            >
              Sign In
            </NavLink>

            <NavLink
              exact="true"
              className="header__link mx-3"
              to="/photos"
              activeclassname="header__link--active"
            >
              Photo
            </NavLink>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
