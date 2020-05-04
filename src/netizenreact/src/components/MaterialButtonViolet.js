import React, { Component } from "react";
import styled, { css } from "styled-components";




function MaterialButtonViolet(props) {    
    function handleClick() {
      var txt;
      if (window.confirm("Press a button!")) {
        txt = "You pressed OK!";
      } else {
        txt = "You pressed Cancel!";
      }
    }
  return (
    <div>
    <button onClick={handleClick}>
    text
    </button>

    <Container {...props}>
      <Caption>Right</Caption>
    </Container>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  background-color: #3F51B5;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-right: 16px;
  padding-left: 16px;
  min-width: 88px;
  border-radius: 2px;
  box-shadow: 0px 1px 5px  0.35px #000 ;
`;

const Caption = styled.span`
  font-family: Roboto;
  color: #fff;
  font-size: 14px;
`;

export default MaterialButtonViolet;
