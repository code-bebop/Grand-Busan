import React from "react";
import styled, { css } from "styled-components";

import Button from "./Button";
import SideIco from "../../img/btn_view.png";

const SideDesBlock = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 275px;
  text-transform: uppercase;
  margin-bottom: 60px;
  ${(props) => {
    if (props.vertical === false) {
      return css`
        flex-direction: row;
        width: 100%;
        align-items: flex-end;
        margin-bottom: 40px;
        ${Title} {
          margin: 0 25px 0 0;
        }
        ${Tags} {
          margin: 0 auto 0 0;
        }
      `;
    }
    if (props.color === "white") {
      return css`
        color: #fff;
        ${Tags} {
          color: #fff;
        }
        ${SideButton} {
          background-position-x: -85px;
          &:hover {
            background-position-x: -127px;
          }
        }
      `;
    }
    if (props.tagOnDes) {
      return css`
        ${Tags} {
          margin: 0;
        }
        ${Des} {
          margin: 40px 0 55px;
          line-height: 34px;
        }
      `;
    }
  }}
`;
const Title = styled.strong`
  font-size: ${({ theme }) => theme.fontSizes.title};
  margin: 45px 0 8px;
`;
const Des = styled.span`
  font-size: 18px;
  white-space: pre-line;
`;
const Tags = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #ba998c;
  margin: 25px 0 35px;
`;
const SideButton = styled.a`
  background-image: url(${SideIco});
  background-repeat: no-repeat;
  width: 42px;
  height: 42px;
  text-indent: -9999px;
  &:hover {
    background-position-x: -42px;
  }
`;

const PageDes = ({ title, des, tags, vertical = true, color, tagOnDes }) => {
  if (!des) {
    return (
      <SideDesBlock vertical={vertical} color={color} des={des}>
        <Title>{title}</Title>
        <Tags>{tags}</Tags>
        <SideButton href={"/"}>바로가기</SideButton>
      </SideDesBlock>
    );
  }
  if (tagOnDes) {
    return (
      <SideDesBlock
        vertical={vertical}
        color={color}
        des={des}
        tagOnDes={tagOnDes}
      >
        <Title>{title}</Title>
        <Tags>{tags}</Tags>
        <Des>{des}</Des>
        <Button width="175px" height="50px" color="black" fontsize="18px">
          혜택 확인 및 가입
        </Button>
      </SideDesBlock>
    );
  }
  return (
    <SideDesBlock vertical={vertical} color={color} des={des}>
      <Title>{title}</Title>
      <Des>{des}</Des>
      <Tags>{tags}</Tags>
      <SideButton href={"/"}>바로가기</SideButton>
    </SideDesBlock>
  );
};

export default PageDes;
