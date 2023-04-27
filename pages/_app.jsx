import "../src/scss/globals.scss";

const App = (props) => {
  // **Props
  const { Component, pageProps } = props;

  return <Component {...pageProps} />;
};

export default App;
