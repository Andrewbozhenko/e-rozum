import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="uk">
      <Head>
        <link
          rel="preload"
          href="/fonts/e-UkraineHead-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
         <link
          rel="preload"
          href="/fonts/e-UkraineHead-Light.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
         <link
          rel="preload"
          href="/fonts/e-UkraineHead-Medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
          <link
          rel="preload"
          href="/fonts/e-UkraineHead-Regular.woff2"
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
