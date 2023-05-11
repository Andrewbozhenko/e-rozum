import { Footer, Header } from "@components/sections";
import { SuccessSend } from "./success";

export const Success = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <main>
          <SuccessSend />
        </main>
        <Footer />
      </div>
    </>
  );
};
