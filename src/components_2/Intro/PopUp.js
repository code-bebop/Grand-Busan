import React from "react";
import styled, { css } from "styled-components";

const PopUpBlock = styled.div`
  position: absolute;
  bottom: 60px;
  left: 0;
  width: 1400px;
  height: 520px;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  overflow: hidden;
  transition: height 0.3s;
  ${(props) => {
    if (props.isPopUp === false) {
      return css`
        height: 0;
      `;
    }
  }}
`;

const PopUp = ({ children, isPopUp }) => {
  return <PopUpBlock isPopUp={isPopUp}>{children}</PopUpBlock>;
};

export default PopUp;
