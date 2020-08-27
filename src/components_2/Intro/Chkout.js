import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import DatePicker from "react-datepicker";
import Button from "../Common/Button";
import PopUp from "./PopUp";

import "./react-datepicker.css";

const ChkoutBlock = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  position: relative;
  strong {
    margin-left: 45px;
    font-size: 18px;
    text-transform: uppercase;
    color: #888;
    line-height: 1em;
  }
`;

const ChkoutDate = styled.span`
  font-size: 22px;
  font-weight: bold;
  margin-left: 25px;
  & > span {
    margin-left: 45px;
    position: relative;
    & > span::after {
      content: "";
      width: 1px;
      height: 18px;
      background-color: #aaa;
      display: inline-block;
      position: absolute;
      left: -70%;
      top: 30%;
    }
  }
`;

const CustomHeader = styled.div`
  position: relative;
  button {
    position: absolute;
  }
  span {
    font-size: 24px;
    font-weight: bold;
  }
`;

const Chkout = (isPopUp, setIsPopUp) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  return (
    <ChkoutBlock>
      <Button onClick={() => setIsPopUp(!isPopUp)} color={"white"}>
        <strong>Check In / Out</strong>
        <ChkoutDate></ChkoutDate>
        <span>1박</span>
      </Button>{" "}
      <PopUp isPopUp={isPopUp}>
        <DatePicker
          selected={startDate}
          startDate={startDate}
          endDate={endDate}
          inline
          slectsRange
          monthsShown={2}
          shouldCloseOnSelect={false}
          minDate={new Date()}
          popperPlacement="top-end"
          renderCustomHeader={({ decreaseMonth, date }) => {
            return (
              <CustomHeader>
                <Button onClick={decreaseMonth} color={"white"}>
                  {"<"}
                </Button>
                <span>
                  {date.getFullYear()}.{date.getMonth() + 1}
                </span>
              </CustomHeader>
            );
          }}
          renderDayContents={(day, date) => {
            return <span>{day}</span>;
          }}
        />
      </PopUp>
    </ChkoutBlock>
  );
};

export default Chkout;
