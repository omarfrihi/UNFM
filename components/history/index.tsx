import React, { useEffect, useRef } from "react";
import Timeline from "timelinejs-react";
import { HistoryWrapper, ShowMore } from "./styles";
import dayjs from "dayjs";
import Button from "../Button";
import Popup from "./popup";
import WithLayout from "../../hoc";
import { HistoryPageProps } from "../../pages/history";
export type HistoryProps = {
  events: Slide[];
};
const History = ({ timeline, popup }: HistoryPageProps) => {
  return (
    <>
      <Popup {...popup}></Popup>
      <HistoryWrapper id="wrapper">
        <Timeline
          target={<div className="timeline" style={{ height: 700 }} />}
          events={timeline.events}
          options={{
            language: "fr",
          }}
        />
      </HistoryWrapper>
    </>
  );
};

export default History;
