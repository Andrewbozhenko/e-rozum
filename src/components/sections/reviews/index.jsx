import React, { useEffect, useState } from "react";
import { Swiper } from "swiper";
import { ReviewCard } from "@components/cards/review-card";
import { ReviewScreenshotCard } from "@components/cards/review-screenshot-card";
import { REVIEWS } from "@utils";

export const Reviews = () => {
  const totalReviews = REVIEWS.length;
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [swiperDestroyed, setSwiperDestroyed] = useState(false);

  const ratedReviews = REVIEWS.filter((review) => typeof review.rating === "number");
  const averageRating =
    ratedReviews.reduce((acc, curr) => acc + curr.rating, 0) /
    ratedReviews.length;

  const fullStars = Math.floor(averageRating);
  const hasHalfStar = averageRating - fullStars >= 0.5;

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

  useEffect(() => {
    const swiper = new Swiper(".reviews__container", {
      slidesPerView: 1.2,
      spaceBetween: 25,
      autoHeight: true,
    });

    setSwiperInstance(swiper);

    return () => {
      swiper.destroy();
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767 && swiperInstance && !swiperDestroyed) {
        swiperInstance.destroy();
        setSwiperDestroyed(true);
      } else if (
        window.innerWidth <= 767 &&
        swiperDestroyed &&
        swiperInstance === null
      ) {
        const swiper = new Swiper(".reviews__container", {
          slidesPerView: 1.2,
          spaceBetween: 25,
          autoHeight: true,
        });
        setSwiperInstance(swiper);
        setSwiperDestroyed(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [swiperInstance, swiperDestroyed]);

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
              <div className="reviews__card-circle">{circleRating}</div>
              <p className="reviews__score-total">{`${totalReviews} відгуків`}</p>
            </div>
          </div>
          <div
            className={`reviews__container ${
              !swiperDestroyed && "swiper-container"
            }`}
          >
            <div
              className={`reviews__list ${
                !swiperDestroyed && "swiper-wrapper"
              }`}
            >
              {REVIEWS.map((review) =>
                review.type === "screenshot" ? (
                  <ReviewScreenshotCard
                    swiperDestroyed={swiperDestroyed}
                    key={review.id}
                    image={review.image}
                    alt={review.alt}
                  />
                ) : (
                  <ReviewCard
                    swiperDestroyed={swiperDestroyed}
                    key={review.id}
                    rating={review.rating}
                    review={review.review}
                    author={review.author}
                    status={review.status}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
