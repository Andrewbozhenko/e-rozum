import { ReviewScreenshotCard } from "@components/cards/review-screenshot-card";
import { REVIEWS } from "@utils";

export const Reviews = () => {
  const screenshotReview = REVIEWS.find((review) => review.type === "screenshot");

  return (
    <section id="reviews" className="reviews section">
      <div className="container">
        <div className="reviews__wrapper">
          <div className="reviews__text">
            <h2 className="reviews__title-logo">єРозум</h2>
            <h2 className="reviews__title title">Відгуки</h2>
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
