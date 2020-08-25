import React, { useEffect } from "react";

import InfoCounter from "./InfoCounter";
import { increase } from "../../modules/rev";
import { useDispatch, useSelector } from "react-redux";

const InfoRoom = () => {
  const rooms = useSelector((state) => state.rooms);

  const dispatch = useDispatch();
  const onIncrease = (roomNum, age) => {
    dispatch(increase(roomNum, age));
  };

  return (
    <ul>
      {rooms.map((room, index) => {
        return (
          <li key={index}>
            <span>객실 {index + 1}</span>
            <InfoCounter
              number={rooms[index].adult}
              onIncrease={onIncrease}
              roomNum={index + 1}
            >
              성인
            </InfoCounter>
            <InfoCounter
              number={rooms[index].child}
              onIncrease={onIncrease}
              roomNum={index + 1}
            >
              어린이
            </InfoCounter>
          </li>
        );
      })}
    </ul>
  );
};

export default InfoRoom;
