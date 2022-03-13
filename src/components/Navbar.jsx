import React from "react";
import styled from "styled-components";

const navBarWrapper = styled.header`
  height: 120px;
  background-color: #0000;
`;
const Logo = styled.div`
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
  border-radius: 10px;
`;

function Navbar() {
  return (
    <navBarWrapper>
      <Logo>
        <img height="60px" src="logo.png" alt="" />
      </Logo>

      <ResourceLinks>
        <Button>Try Now </Button>
        {/* <A>About us</A>
        <A>FAQ</A>
        <A>Login</A> */}
      </ResourceLinks>
    </navBarWrapper>
  );
}

export default Navbar;
