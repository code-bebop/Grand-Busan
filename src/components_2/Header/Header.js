import React from "react";
import styled from "styled-components";

import logoImg from "../../img/bg_logo.png";
import rsvIco from "../../img/ico_rsv.png";

const Header = styled.header`
  position: fixed;
  z-index: 2;
  background: #ba998c;
  height: 80px;
  width: 100%;
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 50px;
  height: 100%;
`;

const HeaderLogo = styled.a`
  width: 87px;
  height: 30px;
  background-image: url(${logoImg});
  background-repeat: no-repeat;
  text-indent: -9999px;
`;

const HeaderList = styled.ul`
  display: flex;
`;

const HeaderListItem = styled.li`
  color: #fff;
  list-style: none;
  position: relative;
  a {
    color: inherit;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 14px;
    font-family: GotahmM;
  }
  &:first-child > a::after {
    content: "";
    display: inline-block;
    width: 16px;
    height: 10px;
    background-image: url(${rsvIco});
    background-size: cover;
    background-repeat: no-repeat;
    margin-left: 10px;
  }
  & + & {
    margin-left: 85px;
  }
  & + &:before {
    content: "";
    display: inline-block;
    position: absolute;
    top: 6px;
    left: -40px;
    width: 1px;
    height: 12px;
    background-color: #fff;
  }
`;

const Test = () => {
  return (
    <Header>
      <HeaderWrapper>
        <HeaderLogo href={"/"}>로고 이미지</HeaderLogo>
        <HeaderList>
          <HeaderListItem>
            <a href="/">Reservation</a>
          </HeaderListItem>
          <HeaderListItem>
            <a href="/">Offers</a>
          </HeaderListItem>
          <HeaderListItem>
            <a href="/">My Reservation</a>
          </HeaderListItem>
        </HeaderList>
      </HeaderWrapper>
    </Header>
  );
};

export default Test;
