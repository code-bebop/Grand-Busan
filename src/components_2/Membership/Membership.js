import React from "react";
import styled from "styled-components";

import PageDes from "../Common/PageDes";
import MembershipBg from "../../img/bg_membership.jpg";

const MembershipBlock = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${MembershipBg});
`;

const MembershipWrapper = styled.div`
  position: absolute;
  top: 200px;
  left: 252px;
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  width: 1400px;
  height: 640px;
  padding: 0 55px 0 95px;
`;

const Membership = () => {
  return (
    <MembershipBlock>
      <MembershipWrapper>
        <PageDes
          title={"Club Josun"}
          des={
            "신세계조선호텔의 멤버십 프로그램 조선클럽은 품격있는 라이프스타일과 특별한 경험을 제안합니다. 클럽조선 회원이 되셔서 다채로운 혜택과 최상의 서비스를 누려보세요."
          }
          tags={"ShinSeGae Josun Hotel Membership Program"}
          tagOnDes={true}
        />
      </MembershipWrapper>
    </MembershipBlock>
  );
};

export default Membership;
