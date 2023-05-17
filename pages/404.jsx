import { Error } from "@pages/404";
import Head from "next/head";

const Page = () => {
  return (
    <>
      <Head>
        <title>E-rozum</title>
        <meta name="description" content="E-rozum" />
      </Head>
      <Error />
    </>
  );
};

export default Page;
