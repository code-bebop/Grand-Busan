import React from "react";
import styled from "styled-components";

import SideDes from "../Common/SideDes";
import DiningBg from "../../img/bg_dining.jpg";

const DiningBlock = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  background-image: url(${DiningBg});
  background-size: cover;
  background-repeat: no-repeat;
`;

const DiningSideDesBlock = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 115px 0 0 70px;
  box-sizing: border-box;
  width: 30vw;
  height: 100vh;
  background-color: #fff;
`;
const Dining = () => {
  return (
    <DiningBlock>
      <DiningSideDesBlock>
        <SideDes
          title={"Handpicked Gourmet Experience"}
          des={"최고만 엄선한 미식의 경험"}
          tags={"Chinese / Buffet / Lounge&Bar"}
        />
      </DiningSideDesBlock>
    </DiningBlock>
  );
};

export default Dining;
