import "./styles.css";
import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";

const Wrapper = styled.div`
  padding: 2rem;
  border: 1px solid blueviolet;

  h1 {
    color: blue;
  }

  h2 {
    color: red;

    @media all and (max-width: 620px) {
      color: green;
    }
  }
`;

const A = styled.a`
  text-decoration: none;
  font-size: 24px;
  color: ${(props) => (props.color === "yellow" ? "blue" : "red")};
`;

export default function App() {
  return (
    <div className="App">
      {/* <Wrapper>
        <A color="yellow" href="https://www.google.com/">
          {" "}
          go to Google
        </A>
        <h1>Hello Nitish</h1>
        <h2>Start editing to see some magic happen!</h2>
      </Wrapper> */}

      <Navbar />
    </div>
  );
}
