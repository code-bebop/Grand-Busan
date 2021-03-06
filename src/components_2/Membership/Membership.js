import React from "react";
import styled from "styled-components";

import SideDes from "../Common/SideDes";
import PageDes from "../Common/PageDes";
import MembershipBg from "../../img/bg_membership.jpg";
import MembershipSideImg from "../../img/image_(62).png";

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
  align-items: center;
  background-color: #fff;
  width: 1400px;
  height: 640px;
  padding: 0 55px 0 95px;
  box-sizing: border-box;
`;

const Membership = () => {
  return (
    <MembershipBlock>
      <MembershipWrapper>
        <PageDes
          title={"Club Josun"}
          des={
            "신세계조선호텔의 멤버십 프로그램 조선클럽은 품격있는 라이프스타일과 특별한 경험을 제안합니다.\n 클럽조선 회원이 되셔서 다채로운 혜택과 최상의 서비스를 누려보세요."
          }
          tags={"ShinSeGae Josun Hotel Membership Program"}
          tagOnDes
          button={{
            style: {
              width: "175px",
              height: "50px",
              color: "black",
              fontsize: "18px",
            },
            content: ["혜택 확인 및 가입"],
          }}
        />
        <SideDes
          title="Members Only"
          des="CLUB JOSUN First Memory"
          date="2020.08.24 - 2020.09.11"
          imgUrl={MembershipSideImg}
        />
      </MembershipWrapper>
    </MembershipBlock>
  );
};

export default Membership;
