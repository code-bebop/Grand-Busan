import React from "react";
import styled from "styled-components";

import Button from "../Common/Button";

const InfoCounterBlock = styled.div`
  border-bottom: 1px solid #6d3e3e;
  height: 60px;
  & + & {
    margin-left: 20px;
  }
  span {
    margin: 0 50px;
    font-size: 18px;
  }
`;

const InfoCounter = ({ children, number, onIncrease, onDecrease, roomNum }) => {
  return (
    <InfoCounterBlock>
      <Button color={"white"} onClick={() => onDecrease(roomNum, children)}>
        ㅡ
      </Button>
      <span>
        {children} {number}
      </span>
      <Button color={"white"} onClick={() => onIncrease(roomNum, children)}>
        +
      </Button>
    </InfoCounterBlock>
  );
};

export default InfoCounter;
