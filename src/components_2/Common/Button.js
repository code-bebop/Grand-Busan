import React from "react";
import styled, { css } from "styled-components";

const CommonButton = styled.button`
  position: relative;
  overflow: hidden;
  outline: none;
  border: none;
  font-size: ${(props) => (props.fontsize ? props.fontsize : "24px")};
  text-transform: uppercase;
  cursor: pointer;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  ${(props) => {
    if (props.hoverEffect) {
      return css`
        z-index: 1;
        transition: all 0.5s ease-in-out;
        &:hover {
          color: #000;
        }
        &:before {
          content: "";
          position: absolute;
          top: 0;
          left: -150%;
          background: #fff;
          width: 130%;
          height: 100%;
          -webkit-transform: skewX(-16deg);
          -moz-transform: skewX(-16deg);
          -o-transform: skewX(-16deg);
          -ms-transform: skewX(-16deg);
          transform: skewX(-16deg);
          transition: all 0.5s ease-in-out;
          z-index: -1;
        }

        &:hover:before {
          left: -10%;
        }
      `;
    }
  }}
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
        border: 1px solid #000;
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
      hoverEffect={props.hoverEffect}
    >
      {children}
    </CommonButton>
  );
};

export default Button;
