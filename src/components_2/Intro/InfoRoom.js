import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "../../modules/rev";

import InfoCounter from "./InfoCounter";
import Button from "../Common/Button";

const InfoRoomBlock = styled.div`
  display: flex;
  ul {
    padding: 0;
    li {
      display: flex;
      align-items: center;
      margin-top: 60px;
      &:first-child {
        margin: 0;
      }
      strong {
        font-size: 24px;
        font-weight: 300;
        margin-right: 70px;
      }
    }
  }
`;

const InfoRoomDes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 160px;
  span {
    margin-top: 15px;
    margin-bottom: 18px;
    font-size: 16px;
    color: #9e9e9e;
    &:first-child {
      margin: 0;
    }
  }
`;

const InfoRoomButton = styled(Button)`
  border: 1px solid #000;
`;

const InfoRoom = () => {
  const rooms = useSelector((state) => state.rooms);

  const dispatch = useDispatch();
  const onIncrease = (roomNum, age) => {
    dispatch(increase(roomNum, age));
  };
  const onDecrease = (roomNum, age) => {
    dispatch(decrease(roomNum, age));
  };

  return (
    <InfoRoomBlock>
      <ul>
        {rooms.map((room, index) => {
          return (
            <li key={index}>
              <strong>객실 {index + 1}</strong>
              <InfoCounter
                number={rooms[index].adult}
                onIncrease={onIncrease}
                onDecrease={onDecrease}
                roomNum={index + 1}
              >
                성인
              </InfoCounter>
              <InfoCounter
                number={rooms[index].child}
                onIncrease={onIncrease}
                onDecrease={onDecrease}
                roomNum={index + 1}
              >
                어린이
              </InfoCounter>
            </li>
          );
        })}
      </ul>
      <InfoRoomDes>
        <span>* 최대 3개 객실 예약 가능</span>
        <span>* 어린이 기준: 0세 ~ 13세</span>
        <InfoRoomButton width={"190px"} height={"60px"} color={"white"}>
          확인
        </InfoRoomButton>
      </InfoRoomDes>
    </InfoRoomBlock>
  );
};

export default InfoRoom;
