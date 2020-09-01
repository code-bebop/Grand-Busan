import React from "react";
import styled from "styled-components";
import Swiper from "react-id-swiper";
import "swiper/swiper.scss";

import SideDes from "../Common/SideDes";
import SlideImg1 from "../../img/img_main02_01.jpg";
import SlideImg2 from "../../img/img_main02_02.jpg";
import SlideImg3 from "../../img/img_main02_03.jpg";
import SlideImg4 from "../../img/img_main02_04.jpg";
import PackageImg from "../../img/img_main02_05.jpg";
import SlideButtonIco from "../../img/btn_swipe_10x18.png";
import SlideAutoIco from "../../img/btn_auto2.png";

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

const RoomsSlide = styled.div`
  position: relative;
  width: 1050px;
  height: 760px;
  overflow: hidden;
`;

const SlideButtonWrapper = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 40px;
  right: 40px;
`;
const SlidePrevButton = styled.button`
  width: 10px;
  height: 18px;
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  background-image: url(${SlideButtonIco});
  background-color: transparent;
  cursor: pointer;
`;
const SlideNextButton = styled(SlidePrevButton)`
  background-position-x: 10px;
`;
const SlideAutoButton = styled(SlidePrevButton)`
  height: 20px;
  background-image: url(${SlideAutoIco});
  background-position-x: 11px;
  margin: 0 18px;
`;

const RoomsSide = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 60px;
  height: 100%;
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
  const params = {
    centeredSlides: true,
    loop: true,
  };

  return (
    <RoomsBlock>
      <RoomsWrapper>
        <RoomsSlide>
          <Swiper {...params}>
            <img src={SlideImg1} alt={"슬라이드 이미지 1"} />
            <img src={SlideImg2} alt={"슬라이드 이미지 2"} />
            <img src={SlideImg3} alt={"슬라이드 이미지 3"} />
            <img src={SlideImg4} alt={"슬라이드 이미지 4"} />
          </Swiper>
          <SlideButtonWrapper>
            <SlidePrevButton />
            <SlideAutoButton />
            <SlideNextButton />
          </SlideButtonWrapper>
        </RoomsSlide>

        <RoomsSide>
          <SideDes
            title={"Revitalizing space"}
            des={"온전한 쉼과 재충전에 집중할 수 있는 더 없이 완벽한 공간"}
            tags={"Rooms / Suites / Kids"}
          ></SideDes>
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
