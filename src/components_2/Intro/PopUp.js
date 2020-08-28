import React from "react";
import styled, { css } from "styled-components";

const PopUpBlock = styled.div`
  position: absolute;
  bottom: 60px;
  left: 0;
  width: 1400px;
  height: 520px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  overflow: hidden;
  transition: height 0.3s;
`;

const PopUp = ({ children }) => {
  return <PopUpBlock>{children}</PopUpBlock>;
};

export default PopUp;
