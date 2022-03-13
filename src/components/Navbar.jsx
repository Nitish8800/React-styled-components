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
  font-weight: 300;
`;

const Button = styled.button`
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  padding: 15px 30px;
  border-radius: 5px;
`;

const A = styled.a`
  text-decoration: none;
  color: red;
  margin-left: 50px;
  cursor: pointer;
`;

function Navbar() {
  return (
    <NavBarWrapper>
      <Logo>
        <img
          width="100px"
          height="60px"
          src="https://masaischool.com/img/navbar/logo.svg"
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
