import { Form, Header, Footer } from "@components/sections";
import { Article } from "./article";

export const Articles = () => {
  return (
    <>
      <div className="wrapper no-overflow">
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
