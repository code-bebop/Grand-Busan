import React, { useState } from "react";
import bg_main01 from "../../img/bg_main01.jpg";
import Chkout from "./Chkout";
import Info from "./Info";
import Button from "../Common/Button";

import styled, { css } from "styled-components";

const IntroBg = styled.img`
  width: 100vw;
  height: 100vh;
  vertical-align: bottom;
`;

const IntroWrapper = styled.div`
  position: absolute;
  top: 35%;
  padding: 0 250px;
  z-index: 1;
`;

const IntroTxtBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
  color: #fff;
  text-transform: uppercase;
  strong {
    font-size: 72px;
  }
  em {
    font-size: 44px;
  }
`;

const IntroRev = styled.div`
  width: 1400px;
  height: 60px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  position: relative;
  ${(props) => {
    if (props.isPopUp === true) {
      return css`
        transform: translateY(115px);
      `;
    }
  }}
`;

const IntroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  display: none;
  ${(props) => {
    if (props.isPopUp === true) {
      return css`
        display: block;
      `;
    }
  }}
`;

const Intro = () => {
  const [isPopUp, setIsPopUp] = useState({ chkout: false, info: false });

  return (
    <div>
      <IntroBg src={bg_main01} alt={"인트로 배경화면"}></IntroBg>
      <IntroWrapper>
        <IntroTxtBox>
          <strong>Grand Josun Busan</strong>
          <em>Coming Soon</em>
        </IntroTxtBox>
        <IntroRev isPopUp={isPopUp}>
          <Chkout isPopUp={isPopUp} setIsPopUp={setIsPopUp} />
          <Info isPopUp={isPopUp} setIsPopUp={setIsPopUp} />
          <Button width={"194px"} height={"60px"} color={"black"}>
            Search
          </Button>
        </IntroRev>
      </IntroWrapper>
      <IntroOverlay
        isPopUp={isPopUp}
        onClick={() => setIsPopUp(!isPopUp)}
      ></IntroOverlay>
    </div>
  );
};

export default Intro;
