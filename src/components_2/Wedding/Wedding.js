import React from "react";
import styled from "styled-components";

import PageDes from "../Common/PageDes";
import WeddingBg from "../../img/bg_wedding.jpg";

const WeddingBlock = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${WeddingBg});
  display: flex;
  justify-content: center;
  align-items: center;
`;
const WeddingBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Wedding = () => {
  return (
    <WeddingBlock>
      <WeddingBlockWrapper>
        <PageDes
          title="The Perfect Venue For Your Special Event"
          des="인생의 특별한 순간, 이벤트, 컨퍼런스홀 그랜드 조선 부산에서 준비해보세요."
          color="white"
          width="auto"
        />
      </WeddingBlockWrapper>
    </WeddingBlock>
  );
};

export default Wedding;
