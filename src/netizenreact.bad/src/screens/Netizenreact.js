import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialButtonViolet from "../components/MaterialButtonViolet";
import MaterialButtonViolet1 from "../components/MaterialButtonViolet1";
import MaterialButtonViolet2 from "../components/MaterialButtonViolet2";
import MaterialButtonViolet3 from "../components/MaterialButtonViolet3";

function Netizenreact(props) {
  return (
    <Container>
      <Button>
        <ButtonOverlay>
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
        </ButtonOverlay>
      </Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100vh;
  width: 100vw;
`;

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const Button = styled.div`
  width: 100px;
  height: 215px;
  flex-direction: column;
  justify-content: space-between;
  border: none;
`;

export default Netizenreact;
