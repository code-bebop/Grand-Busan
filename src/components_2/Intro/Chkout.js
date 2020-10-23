import React, { useState } from "react";
import "react-dates/initialize";
import styled, { css } from "styled-components";
import Button from "../Common/Button";
import { PopUpBlock } from "./PopUp";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import moment from "moment";
import "moment/locale/ko";

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

const ChkoutPopUp = styled(PopUpBlock)`
  display: flex;
  align-items: center;
  & .DateInput,
  & .DateRangePickerInput_arrow {
    display: none;
  }
  & .DateRangePicker_picker {
    position: static;
    border: none;
    & .DayPicker__withBorder {
      box-shadow: none;
      border: none;
    }
    & .CalendarMonthGrid__horizontal {
    }
    & .CalendarMonthGrid_month__horizontal {
    }
  }
  ${(props) => {
    if (props.isPopUp === false) {
      return css`
        height: 0;
        border: none;
      `;
    }
  }}
`;

const Chkout = ({ isPopUp, setIsPopUp }) => {
  moment.locale("ko");
  const [startDate, setStartDate] = useState(moment());
  const [endDate, setEndDate] = useState(moment());
  const [focusedInput, setFocusedInput] = useState("startDate");

  return (
    <ChkoutBlock>
      <Button
        onClick={() => setIsPopUp({ chkout: true, info: false })}
        color={"white"}
      >
        <strong>Check In / Out</strong>
        <ChkoutDate>
          <span>{startDate.format("L")}</span>
          <span>{!endDate ? startDate.format("L") : endDate.format("L")}</span>
        </ChkoutDate>
        <span>1박</span>
      </Button>
      <ChkoutPopUp isPopUp={isPopUp.chkout}>
        <DateRangePicker
          startDate={startDate}
          startDateId="your_unique_start_date_id"
          endDate={endDate}
          endDateId="your_unique_end_date_id"
          onDatesChange={({ startDate, endDate }) => {
            setStartDate(startDate);
            setEndDate(endDate);
          }}
          focusedInput={focusedInput}
          onFocusChange={(focusedInput) => {
            if (!focusedInput) return;
            setFocusedInput(focusedInput);
          }}
          noBorder={true}
          daySize={50}
          transitionDuration={0}
        />
      </ChkoutPopUp>
    </ChkoutBlock>
  );
};

export default Chkout;
