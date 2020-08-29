import React from "react";
import styled from "styled-components";

import SlideImg1 from "../../img/img_main02_01.jpg";
import PackageImg from "../../img/img_main02_05.jpg";
import SideIco from "../../img/btn_view.png";

const RoomsBlock = styled.div`
  position: realtive;
  background-color: #fff;
  &:after {
    content: "";
    display: block;
    width: 50vw;
    height: 100vh;
    background-color: #f0eeed;
  }
`;

const RoomsWrapper = styled.div`
  position: absolute;
  top: 145px;
  left: 250px;
  display: flex;
  justify-content: space-between;
`;

const RoomsSide = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 60px;
  height: 100%;
`;

const RoomsSideDes = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 275px;
  text-transform: uppercase;
  margin-bottom: 60px;
  strong {
    font-size: 42px;
    margin: 45px 0 8px;
  }
  span {
    font-size: 18px;
    &:nth-child(3) {
      font-size: 16px;
      font-weight: bold;
      color: #ba998c;
      margin: 25px 0 35px;
    }
  }
  a {
    background-image: url(${SideIco});
    background-repeat: no-repeat;
    width: 42px;
    height: 42px;
    text-indent: -9999px;
    &:hover {
      background-position-x: -42px;
    }
  }
`;

const RoomsSidePackage = styled.a`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  strong {
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 10px;
    width: 90px;
    height: 30px;
    border: 1px solid #000;
  }
  span {
    font-size: 18px;
    margin-bottom: 20px;
    &:nth-child(2) {
      margin: 20px 0 15px;
      font-size: 24px;
    }
  }
`;

const Rooms = () => {
  return (
    <RoomsBlock>
      <RoomsWrapper>
        <img src={SlideImg1} alt={"슬라이드 이미지 1"} />
        <RoomsSide>
          <RoomsSideDes>
            <strong>Revitalizing space</strong>
            <span>온전한 쉼과 재충전에 집중할 수 있는 더 없이 완벽한 공간</span>
            <span>Rooms / Suites / Kids</span>
            <a href={"/"}>바로가기</a>
          </RoomsSideDes>
          <RoomsSidePackage href={"#none"}>
            <strong>Package</strong>
            <span>Super Saver</span>
            <span>2020.08.19 - 2020.08.31</span>
            <img src={PackageImg} alt={"패키지 이미지"} />
          </RoomsSidePackage>
        </RoomsSide>
      </RoomsWrapper>
    </RoomsBlock>
  );
};

export default Rooms;
