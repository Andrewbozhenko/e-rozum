import { Form, Header, Footer } from "@components/sections";
import { First } from "./first";

export const Suggestions = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <main>
          <First />
          <Form />
        </main>
        <Footer />
      </div>
    </>
  );
};
