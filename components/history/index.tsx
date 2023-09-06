import React, { useEffect, useRef } from "react";
import Timeline from "timelinejs-react";
import { HistoryWrapper, ShowMore } from "./styles";
import dayjs from "dayjs";
import Button from "../Button";
import Popup from "./popup";
import WithLayout from "../../hoc";
export type HistoryProps = {
  events: Slide[];
};
const History = ({ events }: HistoryProps) => {
  return (
    <>
      <HistoryWrapper id="wrapper">
        <Timeline
          target={<div className="timeline" style={{ height: "100vh" }} />}
          events={events}
          options={{
            language: "fr",
          }}
        />
      </HistoryWrapper>
    </>
  );
};

export default History;
