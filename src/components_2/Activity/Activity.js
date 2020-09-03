import React from "react";
import styled from "styled-components";

import PageDes from "../Common/PageDes";
import SideDes from "../Common/SideDes";
import ActivityBg from "../../img/bg_activity.jpg";
import ActivitySideImg from "../../img/서핑.jpg";

const ActivityBlock = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${ActivityBg});
  position: relative;
`;

const ActivityWrapper = styled.div`
  position: absolute;
  top: 200px;
  left: 252px;
  display: flex;
  justify-content: space-around;
  width: 1400px;
  height: 640px;
`;

const ActivitySide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 640px;
  background-color: #fff;
`;

const Activity = ({}) => {
  return (
    <ActivityBlock>
      <ActivityWrapper>
        <PageDes
          title={"Get Active"}
          des={"몸과 마음에 활력을 더해 줄 다채로운 액티비티"}
          tags={"Indoor Activity / OutDoor Activity"}
          color={"white"}
        />
        <ActivitySide>
          <SideDes
            title={"On Going"}
            des={"Comming Soon"}
            date={"2020.08.23 - 2020.10.07"}
            imgUrl={ActivitySideImg}
          />
        </ActivitySide>
      </ActivityWrapper>
    </ActivityBlock>
  );
};

export default Activity;
