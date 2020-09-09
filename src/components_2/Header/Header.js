import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

import listArray from "./HeaderMenu.json";
import logoImg from "../../img/bg_logo_grand.png";
import rsvIco from "../../img/ico_rsv.png";

const HeaderBlock = styled.header`
  position: fixed;
  z-index: 2;
  background: transparent;
  width: 100%;
  height: 100px;
  ${(props) => {
    if (props.isHover) {
      return css`
        background-color: #fff;
        ${HeaderMenuOverlay} {
          display: block;
        }
        & > div > a {
          background-position-y: -42px;
        }
        li {
          &:first-child {
            & > a::before {
              background-color: #000;
            }
            & > a::after {
              background-position-y: -10px;
            }
          }
          & > a {
            color: #000;
          }
        }
      `;
    }
  }}
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 0 50px;
  height: 100%;
  z-index: 1;
`;

const HeaderLogo = styled.a`
  width: 118px;
  height: 42px;
  background-image: url(${logoImg});
  background-repeat: no-repeat;
  text-indent: -9999px;
  margin-top: 30px;
`;

const HeaderList = styled.ul`
  display: flex;
  margin: 0 0 0 110px;
  padding: 0;
`;

const HeaderListItem = styled.li`
  list-style: none;
  ${(props) =>
    props.isOn === props.id
      ? css`
          & > a + div {
            display: block;
          }
        `
      : css`
          & > a + div {
            display: none;
          }
        `}
  & > a {
    display: block;
    box-sizing: border-box;
    padding: 40px 0 3px 40px;
    color: inherit;
    text-decoration: none;
    text-transform: uppercase;
    color: #fff;
    font-weight: bold;
    font-size: 14px;
    font-family: GotahmM;
    position: relative;
    &:hover {
      color: ${({ theme }) => theme.colors.beige};
      &::before:not(:first-child) {
        content: "";
        display: block;
        width: calc(100% - 40px);
        height: 2px;
        position: absolute;
        left: 40px;
        bottom: 0;
        background-color: ${({ theme }) => theme.colors.beige};
      }
    }
  }
  &:first-child {
    & > a {
      padding-right: 45px;
      &::before {
        content: "";
        display: inline-block;
        position: absolute;
        top: 45px;
        right: 0;
        width: 1px;
        height: 12px;
        background-color: #fff;
      }
    }
    & > a::after {
      content: "";
      display: inline-block;
      width: 16px;
      height: 10px;
      background-image: url(${rsvIco});
      background-size: cover;
      background-repeat: no-repeat;
      margin-left: 10px;
    }
    &:hover > a::after {
      background-position-y: -20px;
    }
  }
`;
const HeaderMenuOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: none;
`;

const SubMenu = styled.div`
  position: absolute;
  top: 100px;
  left: 0;
  display: none;
  width: 100vw;
  background-color: #fff;
`;
const SubMenuInner = styled.div`
  display: flex;
  margin: 0 auto;
  box-sizing: border-box;
  width: 1400px;
  padding: 55px 0 50px 0;
`;
const SubMenuTitle = styled.div`
  display: inline-flex;
  flex-direction: column;
  strong {
    font-size: 28px;
    font-weight: bold;
  }
  a {
    display: inline-block;
    color: inherit;
    text-decoration: none;
    font-size: 14px;
    box-sizing: border-box;
    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 1px;
      background-color: #000;
    }
  }
`;
const SubList = styled.ul`
  display: flex;
  padding-left: 174px;
`;
const SubListItem = styled.li`
  list-style: none;
  & > a {
    display: inline-block;
    font-size: 18px;
    font-weight: bold;
    text-decoration: none;
    color: inherit;
    margin-bottom: 20px;
  }
  & + & {
    padding-left: 150px;
  }
`;
const SubListDeps2 = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
`;
const SubListDeps2Item = styled.li`
  list-style: none;
  & + & {
    margin-top: 15px;
  }
  & > a {
    text-decoration: none;
    color: inherit;
  }
`;

const Header = ({ ControllChild }) => {
  const [isHover, setIsHover] = useState(false);
  const [isOn, setIsOn] = useState(null);

  const subMenuFn = (listItem) => {
    if (listItem.subListItem) {
      return (
        <SubMenu>
          <SubMenuInner>
            <SubMenuTitle>
              <strong>{listItem.listItem}</strong>
              <a href="/">한 눈에 보기</a>
            </SubMenuTitle>
            <SubList>
              {listItem.subListItem.map((subListItem, index) => {
                return (
                  <SubListItem key={index}>
                    <a href="/">{subListItem.subListItemTitle}</a>
                    {subListDeps2Fn(subListItem)}
                  </SubListItem>
                );
              })}
            </SubList>
          </SubMenuInner>
        </SubMenu>
      );
    } else {
      return null;
    }
  };

  const subListDeps2Fn = (subListItem) => {
    if (subListItem.subListDeps2) {
      return (
        <SubListDeps2>
          {subListItem.subListDeps2.map((subListDeps2Item, index) => {
            return (
              <SubListDeps2Item key={index}>
                <a href="/">{subListDeps2Item}</a>
              </SubListDeps2Item>
            );
          })}
        </SubListDeps2>
      );
    } else {
      return null;
    }
  };

  return (
    <HeaderBlock isHover={isHover}>
      <HeaderWrapper>
        <HeaderLogo href={"/"}>로고 이미지</HeaderLogo>
        <HeaderList
          onMouseOver={(e) => {
            setIsHover(true);
            setIsOn(parseInt(e.target.parentElement.id));
          }}
        >
          {listArray.map((listItem, index) => {
            return (
              <HeaderListItem key={index} isOn={isOn} id={index}>
                <a href="/">{listItem.listItem}</a>
                {subMenuFn(listItem)}
              </HeaderListItem>
            );
          })}
        </HeaderList>
      </HeaderWrapper>
      <HeaderMenuOverlay
        onMouseEnter={() => {
          setIsHover(false);
          setIsOn(null);
        }}
      />
    </HeaderBlock>
  );
};

export default Header;
