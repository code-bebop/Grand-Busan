import React, { useState } from "react";
import styled, { css } from "styled-components";

import PageDes from "../Common/PageDes";
import AccordionImg1 from "../../img/img_facility01_01.jpg";
import AccordionImg2 from "../../img/img_facility01_02.jpg";
import AccordionImg3 from "../../img/img_facility01_03.jpg";

const FacilityBlock = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fff;
`;

const FacilityBlockWrapper = styled.div`
  position: absolute;
  top: 185px;
  left: 252px;
`;

const FacilityAccordion = styled.div`
  width: 1400px;
  height: 640px;
  background-color: orange;
  display: flex;
  &:hover {
    div {
      flex: 1;
    }
  }
  div {
    flex: 1;
    height: 640px;
    background-color: yellow;
    transition: flex 0.7s;
    position: relative;
    &:hover {
      flex: 2;
    }
    &:nth-child(1) {
      background-image: url(${AccordionImg1});
    }
    &:nth-child(2) {
      background-image: url(${AccordionImg2});
    }
    &:nth-child(3) {
      background-image: url(${AccordionImg3});
    }
    span {
      position: absolute;
      bottom: 40px;
      right: 40px;
      font-size: 22px;
      font-weight: bold;
      color: #fff;
      display: none;
    }
  }
  ${(props) => {
    return css`
      div {
        &:nth-child(${props.on}) {
          flex: 2;
          span {
            display: inline;
          }
        }
      }
    `;
  }}
`;

const Facility = () => {
  const [on, setOn] = useState(3);
  const Accordions = ["Pool", "Sauna", "Fitness"];

  return (
    <FacilityBlock>
      <FacilityBlockWrapper>
        <PageDes
          title={"Iconic Facility"}
          tags={"Pool / Sauna / Fitness"}
          vertical={false}
        />
        <FacilityAccordion on={on}>
          {Accordions.map((Accordion, index) => {
            return (
              <div key={index} onMouseEnter={() => setOn(index + 1)}>
                <span>6F {Accordion}</span>
              </div>
            );
          })}
        </FacilityAccordion>
      </FacilityBlockWrapper>
    </FacilityBlock>
  );
};

export default Facility;
