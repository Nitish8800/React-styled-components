import React from "react";
import styled from "styled-components";

const NavBarWrapper = styled.header`
  position: relative;
  height: 120px;
  background-color: whitesmoke;
`;

const Logo = styled.div`
  position: absolute;
  height: 60px;
  top: 24px;
  left: 30px;
  height: 60px;
`;
const ResourceLinks = styled.div`
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-weight: 300;
  position: absolute;
  top: 24px;
  left: 40px;
  letter-spacing: 1px;
  margin-left: 60px;
`;

const Button = styled.button`
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  padding: 15px 30px;
  border-radius: 5px;
  color: #fff;
  background: #00bcd4;
  border: 0px;
  text-align: center;

  @media all and (max-width: 620px) {
    padding: 10px 5px;
    font-size: 10px;
  }

  @media all and (max-width: 450px) {
    display: none;
  }
`;

const A = styled.a`
  text-decoration: none;
  color: red;
  margin-left: 50px;
  cursor: pointer;

  @media all and (max-width: 620px) {
    margin-left: 50px;
  }
`;

function Navbar() {
  return (
    <NavBarWrapper>
      <Logo>
        <img
          width="60px"
          src="data:image/png;base64,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"
          alt="logo.png"
        />
      </Logo>

      <ResourceLinks>
        <Button>Try Now </Button>
        <A>About us</A>
        <A>FAQ</A>
        <A>Login</A>
      </ResourceLinks>
    </NavBarWrapper>
  );
}

export default Navbar;
