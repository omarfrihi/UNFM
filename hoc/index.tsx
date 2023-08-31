import { isEmpty } from "lodash";
import RootLayout from "../components/layout";
import Head from "next/head";

const WithLayout = (Component: any) => (props: any) => {
  const { data, ...restProps } = props;
  const { layout, ...rest } = data;

  if (isEmpty(layout)) return <>Error Strapi</>;

  return (
    <>
      <Head>
        <title>{data.title || "UNFM"}</title>
      </Head>
      <RootLayout {...layout}>
        {!isEmpty(rest) ? (
          <Component {...restProps} data={rest} />
        ) : (
          <>Error Strapi</>
        )}
      </RootLayout>
    </>
  );
};

export default WithLayout;
