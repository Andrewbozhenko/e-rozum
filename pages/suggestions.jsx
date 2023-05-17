import { Suggestions } from "@pages/suggestions";
import Head from "next/head";

const Page = () => {
  return (
    <>
      <Head>
        <title>E-rozum</title>
        <meta name="description" content="E-rozum" />
      </Head>
      <Suggestions />
    </>
  );
};

export default Page;
