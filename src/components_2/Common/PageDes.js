import React from "react";
import styled, { css } from "styled-components";

import Button from "./Button";
import SideIco from "../../img/btn_view.png";

const SideDesBlock = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.align ? props.align : "auto")};
  width: ${(props) => (props.width ? props.width : "275px")};
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
  font-size: ${({ theme }) => theme.fontSizes.des};
  white-space: pre-line;
`;
const Tags = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.tags};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.beige};
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

const ButtonContainer = styled.div`
  margin-top: 36px;
  display: flex;
  button {
    & + button {
      margin-left: 8px;
    }
  }
`;

const PageDes = ({
  title,
  des,
  tags,
  vertical = true,
  color,
  tagOnDes,
  width,
  align,
  button,
}) => {
  const PageDesContent = () => {
    if (!des) {
      return (
        <>
          <Tags>{tags}</Tags>
        </>
      );
    } else if (!tags) {
      return (
        <>
          <Des>{des}</Des>
        </>
      );
    } else if (tagOnDes) {
      return (
        <>
          <Tags>{tags}</Tags>
          <Des>{des}</Des>
        </>
      );
    } else {
      return (
        <>
          <Des>{des}</Des>
          <Tags>{tags}</Tags>
        </>
      );
    }
  };
  const PageDesButton = () => {
    return button ? (
      <ButtonContainer>
        {button.content.map((content, index) => {
          return (
            <Button
              width={button.style.width}
              height={button.style.height}
              color={button.style.color}
              fontsize={button.style.fontsize}
              hoverEffect
              key={index}
            >
              {String(content)}
            </Button>
          );
        })}
      </ButtonContainer>
    ) : (
      <SideButton href={"/"}>바로가기</SideButton>
    );
  };

  return (
    <SideDesBlock
      vertical={vertical}
      color={color}
      tagOnDes={tagOnDes}
      width={width}
      align={align}
    >
      <Title>{title}</Title>
      {PageDesContent()}
      {PageDesButton()}
    </SideDesBlock>
  );
};

export default PageDes;
