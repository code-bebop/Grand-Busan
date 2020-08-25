import React, { useState } from "react";
import styled from "styled-components";

import Button from "../Common/Button";

const InfoCounter = ({ children, number, onIncrease, roomNum }) => {
  return (
    <div>
      {/* <Button color={"white"} onClick={() => onDecrease(children)}>
        -
      </Button> */}
      <span>{children}</span>
      <span>{number}</span>
      <Button color={"white"} onClick={() => onIncrease(roomNum, children)}>
        +
      </Button>
    </div>
  );
};

export default InfoCounter;
