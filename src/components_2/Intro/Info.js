import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import InfoCounter from "./InfoCounter";
import InfoRoom from "./InfoRoom";
import Button from "../Common/Button";
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

const Info = () => {
  const rooms = useSelector((state) => state.rooms);
  let adultSum = 0;
  let childSum = 0;
  const [isPopUp, setIsPopUp] = useState(false);

  rooms.forEach((room) => {
    adultSum += room.adult;
    childSum += room.child;
  });

  return (
    <>
      <InfoBlock onClick={() => setIsPopUp(!isPopUp)}>
        <dl>
          <dt>Room</dt>
          <dd>1</dd>
          <dt>Adult</dt>
          <dd>{adultSum}</dd>
          <dt>Children</dt>
          <dd>{childSum}</dd>
        </dl>
      </InfoBlock>
      <PopUp isPopUp={isPopUp}>
        <InfoRoom></InfoRoom>
      </PopUp>
    </>
  );
};

export default Info;
