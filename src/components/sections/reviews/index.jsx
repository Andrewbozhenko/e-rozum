import { ReviewScreenshotCard } from "@components/cards/review-screenshot-card";
import { REVIEWS } from "@utils";

const FULL_RATING_CIRCLES = Array.from({ length: 5 }, (_, i) => (
  <span key={i} className="reviews__circle reviews__circle--active" />
));

export const Reviews = () => {
  const screenshotReview = REVIEWS.find((review) => review.type === "screenshot");

  return (
    <section id="reviews" className="reviews section">
      <div className="container">
        <div className="reviews__wrapper">
          <div className="reviews__content">
            <div className="reviews__text">
              <h2 className="reviews__title-logo">єРозум</h2>
              <h2 className="reviews__title title">Відгуки</h2>
            </div>
            <div className="reviews__score">
              <div className="reviews__card-circle">{FULL_RATING_CIRCLES}</div>
              <p className="reviews__score-total">1 відгук</p>
            </div>
          </div>
          {screenshotReview && (
            <ReviewScreenshotCard
              image={screenshotReview.image}
              alt={screenshotReview.alt}
            />
          )}
        </div>
      </div>
    </section>
  );
};
