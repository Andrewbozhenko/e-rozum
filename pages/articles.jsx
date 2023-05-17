import { Articles } from "@pages/articles";
import Head from "next/head";

const Page = () => {
  return (
    <>
      <Head>
        <title>E-rozum</title>
        <meta name="description" content="E-rozum" />
      </Head>
      <Articles />
    </>
  );
};

export default Page;
