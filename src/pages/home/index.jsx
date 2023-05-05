import { Header } from "@components/sections/header";
import { Hero } from "@components/sections/hero";
import { Subjects } from "@components/sections/subjects";
import { Teachers } from "@components/sections/teachers";
import { Reviews } from "@components/sections/reviews";
import { Price } from "@components/sections/price";
import { Articles } from "@components/sections/articles";
import { Footer } from "@components/sections";
import { Form } from "@components/sections/form";

export const Home = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <main>
          <Hero />
          <Subjects />
          <Teachers />
          <Reviews />
          <Price />
          <Articles />
          <Form />
        </main>
        <Footer />
      </div>
    </>
  );
};
