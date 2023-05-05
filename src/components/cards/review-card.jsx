export const ReviewCard = (props) => {
  const { rating } = props;
  const { review } = props;
  const { author } = props;
  const { status } = props;
  const { swiperDestroyed } = props;

  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  const circleRating = [];

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      circleRating.push(
        <span key={i} className="reviews__circle reviews__circle--active" />
      );
    } else if (i === fullStars && hasHalfStar) {
      circleRating.push(<span key={i} className="hero__score-half" />);
    }
  }

  return (
    <div className={`reviews__card ${!swiperDestroyed && "swiper-slide"}`}>
      <div className="reviews__card-rating">
        <div className="reviews__card-grade">{rating}</div>
        <div className="reviews__card-circle">{circleRating}</div>
      </div>
      <div className="reviews__card-text">{review}</div>
      <div className="reviews__card-name">
        <p>{author}</p>
        <p>{status}</p>
      </div>
    </div>
  );
};
