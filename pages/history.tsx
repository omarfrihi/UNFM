//@ts-ignore
import dynamic from "next/dynamic";
const events = [
  {
    start_date: {
      year: 2021,
      month: 6,
      day: 5,
    },
    media: {
      url: "https://picsum.photos/200/300",
      thumbnail: "https://picsum.photos/200/300",
      caption: "",
      link: "",
    },
    end_date: {
      year: 2021,
      month: 7,
      day: 4,
    },
    unique_id: "1",
    text: {
      headline: "Event1",
      text: "",
    },
    group: "Catégorie1",
    background: {},
  },
  {
    start_date: {
      year: 2021,
      month: 8,
      day: 4,
    },
    media: {
      url: "https://picsum.photos/200/300",
      thumbnail: "https://picsum.photos/200/300",
      caption: "",
      link: "",
    },
    end_date: {
      year: 2021,
      month: 9,
      day: 5,
    },
    unique_id: "2",
    text: {
      headline: "Event2",
      text: "",
    },
    group: "Catégorie1",
    background: {},
  },
  {
    start_date: {
      year: 2021,
      month: 8,
      day: 4,
    },
    media: {
      url: "https://picsum.photos/200/300",
      thumbnail: "https://picsum.photos/200/300",
      caption: "",
      link: "",
    },
    end_date: {
      year: 2021,
      month: 8,
      day: 5,
    },
    unique_id: "3",
    text: {
      headline: "Event3",
      text: "",
    },
    group: "Catégorie2",
    background: {},
  },
];

const T = dynamic(() => import("../components/test/history"), { ssr: false });

const F = () => <T />;
export default F;
