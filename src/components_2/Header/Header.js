import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

import logoImg from "../../img/bg_logo_grand.png";
import rsvIco from "../../img/ico_rsv.png";

const HeaderBlock = styled.header`
  position: fixed;
  z-index: 2;
  background: transparent;
  width: 100%;
  ${(props) => {
    if (props.isHover) {
      return css`
        background-color: #fff;
        & > div > a {
          background-position-y: -42px;
        }
        li {
          &:first-child {
            &::before {
              background-color: #000;
            }
            & > a::after {
              background-position-y: -10px;
            }
          }
          a {
            color: #000;
          }
        }
      `;
    }
  }}
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 50px;
  height: 100%;
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
  margin: 0 0 0 70px;
`;

const HeaderListItem = styled.li`
  list-style: none;
  position: relative;
  &:first-child > a:hover::before {
    display: none;
  }
  a {
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
      &::before {
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
    }
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

const Header = ({ ControllChild }) => {
  const listArray = [
    "Reservation",
    "Rooms",
    "Dining",
    "Offers",
    "Meeting & Wedding",
    "Activity",
    "Facilities",
    "About",
  ];
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    console.log(ControllChild);
  }, [ControllChild]);

  return (
    <HeaderBlock isHover={isHover}>
      <HeaderWrapper>
        <HeaderLogo href={"/"}>로고 이미지</HeaderLogo>
        <HeaderList>
          {listArray.map((listItem, index) => {
            return (
              <HeaderListItem key={index}>
                <a
                  href="/"
                  onMouseEnter={() => {
                    setIsHover(true);
                  }}
                  onMouseLeave={() => {
                    setIsHover(false);
                  }}
                >
                  {listItem}
                </a>
              </HeaderListItem>
            );
          })}
        </HeaderList>
      </HeaderWrapper>
    </HeaderBlock>
  );
};

export default Header;
