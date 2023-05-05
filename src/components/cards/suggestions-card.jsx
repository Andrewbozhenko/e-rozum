import { ButtonFillArrow } from "@components/ui/button-fillArrow";

export const SuggestionsCard = (props) => {
  const { title, description, image } = props;

  return (
    <li className="suggestions__card">
      <div className="suggestions__card-text">
        <h3 className="suggestions__card-title">{title}</h3>
        <div className="suggestions__card-description">
          <p>{description}</p>
        </div>
      </div>
      <div className="suggestions__card-image">
        <img src={image} alt={title} />
      </div>
      <ButtonFillArrow text="оформити" />
    </li>
  );
};
