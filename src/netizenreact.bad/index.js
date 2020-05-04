import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialButtonViolet from "./components/MaterialButtonViolet";
import MaterialButtonViolet1 from "./components/MaterialButtonViolet1";
import MaterialButtonViolet2 from "./components/MaterialButtonViolet2";
import MaterialButtonViolet3 from "./components/MaterialButtonViolet3";

function Index(props) {
  return (
    <Container>
      <MaterialButtonViolet
        style={{
          width: 100,
          height: 36
        }}
      ></MaterialButtonViolet>
      <MaterialButtonViolet1
        style={{
          width: 100,
          height: 36
        }}
      ></MaterialButtonViolet1>
      <MaterialButtonViolet2
        style={{
          width: 100,
          height: 36
        }}
      ></MaterialButtonViolet2>
      <MaterialButtonViolet3
        style={{
          width: 100,
          height: 36
        }}
      ></MaterialButtonViolet3>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;
`;

export default Index;
