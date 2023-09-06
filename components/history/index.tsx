import React, { useEffect, useRef } from "react";
import Timeline from "timelinejs-react";
import { HistoryWrapper } from "./styles";
import dayjs from "dayjs";
export type HistoryProps = {
  events: (Slide & { quote: string; link: string; action_text: string })[];
};
const History = ({ events: data }: HistoryProps) => {
  const events = data.map((event) => {
    const { link, quote, action_text, ...rest } = event;
    return rest;
  });
  return (
    <HistoryWrapper id="wrapper">
      <Timeline
        target={<div className="timeline" style={{ height: 600 }} />}
        events={events}
        options={{
          language: "fr",
        }}
      />
    </HistoryWrapper>
  );
};

export default History;
