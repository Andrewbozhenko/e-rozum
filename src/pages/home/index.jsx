import { SubjectCard } from "@components/cards";
import { Footer, Header } from "@components/sections";
import { SUBJECTS } from "@utils";

export const Home = () => {
  return (
    <>
      <Header />
      <main>
        {SUBJECTS.map((subject) => (
          <SubjectCard key={subject.id} subject={subject} />
        ))}
      </main>
      <Footer />
    </>
  );
};
