export const SubjectCard = (props) => {
  const { title } = props;
  const { description } = props;
  const { image } = props;
  const { swiperDestroyed } = props;

  return (
    <div className={`subjects__item ${!swiperDestroyed && "swiper-slide"}`}>
      <div className="subjects__item-wrapper">
        <div className="subjects__item-text">
          <h3 className="subjects__item-title">{title}</h3>
          <div className="subjects__item-description">{description}</div>
        </div>
        <div className="subjects__item-image">
          <img src={image} alt={description} />
        </div>
      </div>
    </div>
  );
};
