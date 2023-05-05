import { SuggestionsCard } from "@components/cards/suggestions-card";
import { LinkBack } from "@components/ui/link-back";
import { SUGGESTIONS } from "@utils";

export const First = () => {
  return (
    <section className="first section">
      <div className="container">
        <div className="first__wrapper">
          <div className="first__top">
            <LinkBack />
            <div className="first__text">
              <h2 className="first__title title">Пропозиції</h2>
              <div className="first__description">
                <p>
                  Ознайомтеся з нашими актуальними пропозиціями та скористайтеся
                  найкращою можливістю зробити навчання вигідним
                </p>
              </div>
            </div>
          </div>
          <ul className="first__list">
            {SUGGESTIONS.map((suggestion) => (
              <SuggestionsCard
                key={suggestion.id}
                title={suggestion.title}
                description={suggestion.description}
                image={suggestion.image}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
