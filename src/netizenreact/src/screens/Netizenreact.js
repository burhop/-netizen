import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialButtonViolet from "../components/MaterialButtonViolet";
import MaterialButtonViolet1 from "../components/MaterialButtonViolet1";
import MaterialButtonViolet2 from "../components/MaterialButtonViolet2";
import MaterialButtonViolet3 from "../components/MaterialButtonViolet3";
import * as RobotControl from "../RobotControl";
function OnMyClick2(){
  window.confirm("Press a button!");
}

function Netizenreact(props) {
  return (
    <Group>
      <MaterialButtonViolet  onClick={RobotControl.OnMyClick} onMouseDown={RobotControl.OnMouseDown} 
        style={{
          width: 100,
          height: 36
        }}
      ></MaterialButtonViolet>
      <MaterialButtonViolet1 onClick={RobotControl.OnMyClick} onMouseDown={RobotControl.OnMouseDown} 
        style={{
          width: 100,
          height: 36
        }}
      ></MaterialButtonViolet1>
      <MaterialButtonViolet2 onClick={RobotControl.OnMyClick} onMouseDown={RobotControl.OnMouseDown} 
        style={{
          width: 100,
          height: 36
        }}
      ></MaterialButtonViolet2>
      <MaterialButtonViolet3 onClick={RobotControl.OnMyClick} onMouseDown={RobotControl.OnMouseDown} 
        style={{
          width: 100,
          height: 36
        }}
      ></MaterialButtonViolet3>
    </Group>
  );
}

const Group = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;
`;

export default Netizenreact;
