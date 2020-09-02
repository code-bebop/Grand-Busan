import React from "react";
import styled from "styled-components";

import SideDes from "../Common/SideDes";

const FacilityBlock = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fff;
`;

const FacilityBlockWrapper = styled.div`
  position: absolute;
  top: 252px;
  left: 185px;
`;

const Facility = ({}) => {
  return (
    <FacilityBlock>
      <FacilityBlockWrapper>
        <SideDes
          title={"Iconic Facility"}
          tags={"Pool / Sauna / Fitness"}
          vertical={false}
        ></SideDes>
      </FacilityBlockWrapper>
    </FacilityBlock>
  );
};

export default Facility;
