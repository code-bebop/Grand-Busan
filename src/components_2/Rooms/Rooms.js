import React from "react";
import styled from "styled-components";

const RoomsBlock = styled.div`
  position: realtive;
  &:after {
    content: "";
    display: block;
    width: 50vw;
    height: 100vh;
    background-color: #f0eeed;
  }
`;

const Rooms = () => {
  return <RoomsBlock></RoomsBlock>;
};

export default Rooms;
