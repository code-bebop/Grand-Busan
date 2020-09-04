import React from "react";
import styled, { css } from "styled-components";

const CommonButton = styled.button`
  outline: none;
  border: none;
  font-size: ${(props) => (props.fontsize ? props.fontsize : "24px")};
  text-transform: uppercase;
  cursor: pointer;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  ${(props) => {
    if (props.color === "white") {
      return css`
        color: #000;
        background-color: #fff;
      `;
    } else if (props.color === "white_2") {
      return css`
        color: #fff;
        background-color: transparent;
        border: 1px solid #fff;
      `;
    } else if (props.color === "black") {
      return css`
        color: #fff;
        background-color: #000;
      `;
    }
  }}
`;

const Button = ({ children, width, height, color, ...props }) => {
  return (
    <CommonButton
      width={width}
      height={height}
      color={color}
      fontsize={props.fontsize}
      onClick={props.onClick}
    >
      {children}
    </CommonButton>
  );
};

export default Button;
