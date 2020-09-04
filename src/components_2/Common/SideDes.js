import React from "react";
import styled from "styled-components";

const SideDesBlock = styled.div`
  display: flex;
  flex-direction: column;
  strong {
    margin-bottom: 20px;
    font-size: 28px;
    font-weight: bold;
  }
  a {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: inherit;
    span {
      &:nth-child(2) {
        font-size: 20px;
        margin: 15px 0;
      }
      &:nth-child(3) {
        font-size: 16px;
        color: ${({ theme }) => theme.colors.gray};
      }
    }
  }
  img {
    width: 270px;
    height: 410px;
  }
`;

const SideDes = ({ title, des, date, imgUrl }) => {
  return (
    <SideDesBlock>
      <strong>{title}</strong>
      <a href="/">
        <img src={imgUrl} alt={"상품 이미지"} />
        <span>{des}</span>
        <span>{date}</span>
      </a>
    </SideDesBlock>
  );
};

export default SideDes;
