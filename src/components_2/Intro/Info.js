import React from "react";
import styled, { css } from "styled-components";
import { useSelector } from "react-redux";

import InfoRoom from "./InfoRoom";
import PopUp from "./PopUp";

const InfoBlock = styled.button`
  background-color: white;
  border: none;
  outline: none;
  cursor: pointer;
  dl {
    display: flex;
    align-items: center;
    font-weight: bold;
    dt {
      color: #888;
      font-size: 18px;
    }
    dd {
      font-size: 22px;
      margin-left: 20px;
      margin-right: 65px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

const InfoPopUp = styled(PopUp)`
  ${(props) => {
    if (props.isPopUp === false) {
      return css`
        height: 0;
        border: none;
      `;
    }
  }}
`;

const Info = ({ isPopUp, setIsPopUp }) => {
  const rooms = useSelector((state) => state.rooms);
  let adultSum = 0;
  let childSum = 0;
  let roomSum = 0;

  rooms.forEach((room) => {
    adultSum += room.adult;
    childSum += room.child;
    if (room.adult) {
      roomSum += 1;
    }
  });

  return (
    <>
      <InfoBlock onClick={() => setIsPopUp(!isPopUp.info)}>
        <dl>
          <dt>Room</dt>
          <dd>{roomSum}</dd>
          <dt>Adult</dt>
          <dd>{adultSum}</dd>
          <dt>Children</dt>
          <dd>{childSum}</dd>
        </dl>
      </InfoBlock>
      <InfoPopUp isPopUp={isPopUp.info}>
        <InfoRoom></InfoRoom>
      </InfoPopUp>
    </>
  );
};

export default Info;
