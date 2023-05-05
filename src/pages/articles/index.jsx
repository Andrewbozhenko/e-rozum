import { Form, Header, Footer } from "@components/sections";
import { Article } from "./article";

export const Articles = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <main>
          <Article />
          <Form />
        </main>
        <Footer />
      </div>
    </>
  );
};
