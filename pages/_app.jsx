import { ModalProvider } from "@utils";
import "../src/scss/globals.scss";

const App = (props) => {
  // **Props
  const { Component, pageProps } = props;

  return (
    <ModalProvider>
      <Component {...pageProps} />
    </ModalProvider>
  );
};

export default App;
