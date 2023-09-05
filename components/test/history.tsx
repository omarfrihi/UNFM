import React, { useEffect, useRef } from "react";
import Timeline from "timelinejs-react";
import { HistoryWrapper } from "./styles";
import dayjs from "dayjs";
const events: Slide[] = [
  {
    start_date: {
      year: 1990,
      month: 6,
      day: 5,
    },
    media: {
      url: "https://s3-alpha-sig.figma.com/img/a710/6344/e404c4a9a83b26d0dc67dc51d4073884?Expires=1694995200&Signature=ic8f8EPtOmg2K-Wctx~3NrHpoI-LdK66--WEY8ILkAqqYC1UOdcdlLG0i5z8PRU5QcdCJZpFCmgFv-FfbpvWZoTxdEeX8no39-ffnnUA2QreoJrUAxDmeo6LHj4gT1BqPlbQXgrun0GKOUC-giBBaEfXUrAqAiu7PiuyWKJcB2KxDkj205799nh6PeyjaUGtvFBoL3~pqF1c9hE2Op~q8XrpNmHmuCe0XJo7KPJy6hNgj8CNxB2pf7Da8naomUhiV9NDY2n-t5aYCrxWIJslkwOVNlu-plaPSNieExvpxDNNUmOdDsF-pHzCWNlKhcKsZDaVKZrvgYJ3ZlfHwzFVjA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      thumbnail:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      caption: "",
      link: "",
    },

    unique_id: "1",
    text: {
      headline: "Premier centre d’appel et actions dans les 16 régions",
      text: "Dès la première année de l’existence de l’UNFM, Sa Présidente et les nombreuses collaboratrices de l’Union sont actives sur plusieurs fronts et dans les 16 régions du Royaume, multipliant les innovations, comme le premier centre d’appel à Settat, et les initiatives, notamment des campagnes de sensibilisation à la santé maternelle ou des cours pour lutter contre l’analphabétisme.",
    },
    background: {},
  },
  {
    start_date: {
      year: 1995,
      month: 8,
      day: 4,
      display_date: "frrr",
    },
    media: {
      url: "https://picsum.photos/200/300",
      thumbnail:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      caption: "",
      link: "",
    },

    unique_id: "2",
    text: {
      headline: "Event2",
      text: "MMMMM",
    },
    background: {},
  },
  {
    start_date: {
      year: 2021,
      month: 8,
      day: 5,
      display_date: dayjs()
        .set("month", 8)
        .set("date", 4)
        .set("year", 2021)
        .format("DD MMMM YYYY"),
    },
    media: {
      url: "https://picsum.photos/200/300",
      thumbnail:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      caption: "",
      link: "",
    },

    unique_id: "3",
    text: {
      headline: "Event3",
      text: "mmm",
    },
    background: {},
  },
];

const MyComponent: React.FC = () => {
  return (
    <HistoryWrapper id="wrapper">
      <Timeline
        target={<div className="timeline" style={{ height: 600 }} />}
        events={events}
        options={{
          // timenav_position: "top",
          // hash_bookmark: true,
          // initial_zoom: 1,
          // scale_factor: 1,
          // debug: true,
          // default_bg_color: "green",
          language: "fr",
        }} // optional
      />
    </HistoryWrapper>
  );
};

export default MyComponent;
