import { ButtonCircle } from "@components/ui/button-circle";

export const ArticleCard = (props) => {
  const { image } = props;
  const { text } = props;
  const { swiperDestroyed } = props;

  return (
    <div className={`articles__card ${!swiperDestroyed && "swiper-slide"}`}>
      <div className="articles__card-wrapper">
        <div className="articles__card-info">
          <div className="articles__card-image">
            <img src={image} alt={text} />
          </div>
          <div className="articles__card-text">{text}</div>
        </div>
        <ButtonCircle text="Читати далі" />
      </div>
    </div>
  );
};
