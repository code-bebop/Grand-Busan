import React from "react";
import styled from "styled-components";

import SideIco from "../../img/btn_view.png";

const SideDesBlock = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 275px;
  text-transform: uppercase;
  margin-bottom: 60px;
  strong {
    font-size: 42px;
    margin: 45px 0 8px;
  }
  span {
    font-size: 18px;
    &:nth-child(3) {
      font-size: 16px;
      font-weight: bold;
      color: #ba998c;
      margin: 25px 0 35px;
    }
  }
  a {
    background-image: url(${SideIco});
    background-repeat: no-repeat;
    width: 42px;
    height: 42px;
    text-indent: -9999px;
    &:hover {
      background-position-x: -42px;
    }
  }
`;

const SideDes = ({ title, des, tags }) => {
  return (
    <SideDesBlock>
      <strong>{title}</strong>
      <span>{des}</span>
      <span>{tags}</span>
      <a href={"/"}>바로가기</a>
    </SideDesBlock>
  );
};

export default SideDes;
