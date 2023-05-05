import { Header, Footer } from "@components/sections";
import { Error404 } from "./error";

export const Error = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <main>
          <Error404 />
        </main>
        <Footer />
      </div>
    </>
  );
};
