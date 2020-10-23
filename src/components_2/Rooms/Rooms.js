import React, { useState } from "react";
import styled from "styled-components";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

import PageDes from "../Common/PageDes";
import SlideImg1 from "../../img/img_main02_01.jpg";
import SlideImg2 from "../../img/img_main02_02.jpg";
import SlideImg3 from "../../img/img_main02_03.jpg";
import SlideImg4 from "../../img/img_main02_04.jpg";
// import PackageImg from "../../img/img_main02_05.jpg";
import SlideButtonIco from "../../img/btn_swipe_10x18.png";
import SlideAutoIco from "../../img/btn_auto2.png";

const RoomsBlock = styled.div`
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
  & .swiper-button-prev,
  & .swiper-button-next {
    top: 720px;
    background-image: url(${SlideButtonIco});
    width: 10px;
    height: 18px;
    color: transparent;
  }
  & .swiper-button-prev {
    left: 943px;
  }
  & .swiper-button-next {
    background-position-x: 10px;
    right: 40px;
  }
`;

const SlideAutoButton = styled.div`
  position: absolute;
  top: 720px;
  width: 10px;
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

// const RoomsSidePackage = styled.a`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   text-decoration: none;
//   color: inherit;
//   strong {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     line-height: 10px;
//     width: 90px;
//     height: 30px;
//     border: 1px solid #000;
//   }
//   span {
//     font-size: 18px;
//     margin-bottom: 20px;
//     &:nth-child(2) {
//       margin: 20px 0 15px;
//       font-size: 24px;
//     }
//   }
// `;

SwiperCore.use([Navigation, Autoplay]);

const Rooms = React.forwardRef((props, ref) => {
  return (
    <RoomsBlock ref={ref}>
      <RoomsWrapper>
        <RoomsSlide>
          <Swiper navigation autoplay={true} loop={true}>
            <SwiperSlide>
              <img src={SlideImg1} alt={"슬라이드 이미지 1"} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={SlideImg2} alt={"슬라이드 이미지 2"} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={SlideImg3} alt={"슬라이드 이미지 3"} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={SlideImg4} alt={"슬라이드 이미지 4"} />
            </SwiperSlide>
          </Swiper>
        </RoomsSlide>

        <RoomsSide>
          <PageDes
            title={"Revitalizing space"}
            des={"온전한 쉼과 재충전에 집중할 수 있는 더 없이 완벽한 공간"}
            tags={"Rooms / Suites / Kids"}
          />
          {/* <RoomsSidePackage href={"#none"}>
            <strong>Package</strong>
            <span>Super Saver</span>
            <span>2020.08.19 - 2020.08.31</span>
            <img src={PackageImg} alt={"패키지 이미지"} />
          </RoomsSidePackage> */}
        </RoomsSide>
      </RoomsWrapper>
    </RoomsBlock>
  );
});

export default Rooms;
