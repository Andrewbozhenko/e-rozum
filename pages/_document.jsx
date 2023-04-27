import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="uk">
      <Head>
        <link
          rel="preload"
          href="/fonts/Montserrat-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
