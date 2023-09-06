//@ts-ignore
import dynamic from "next/dynamic";
import dayjs from "dayjs";
import { getLayoytStaticProps } from "../components/layout";
import { HistoryProps } from "../components/history";
import { Media } from "../strapi/types";
import { getHistoryPage } from "../strapi/api";
import Popup, { PopUpHistory } from "../components/history/popup";
import WithLayout from "../hoc";

const HistoryNoSSR = dynamic(() => import("../components/history"), {
  ssr: false,
});

export type HistoryPageProps = {
  timeline: HistoryProps;
  popup: PopUpHistory;
};

const History = ({ data }: { data: HistoryPageProps }) => {
  const { timeline, popup } = data;

  return <HistoryNoSSR {...data} />;
};

export async function getStaticProps({ locale }: { locale: string }) {
  const layout = await getLayoytStaticProps(locale);
  let data = { layout };
  try {
    const history = await getHistoryPage(locale);
    data = {
      ...data,
      ...history,
    };
  } catch (e) {}

  return {
    props: {
      data,
    },
    revalidate: true,
  };
}
export default WithLayout(History);
