import { useState } from "react";

export const ReviewScreenshotCard = (props) => {
  const { image, alt, swiperDestroyed } = props;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={`reviews__card reviews__card-screenshot ${
          !swiperDestroyed && "swiper-slide"
        }`}
        onClick={() => setIsOpen(true)}
      >
        <img src={image} alt={alt} loading="lazy" />
      </button>

      {isOpen && (
        <div
          className="reviews__lightbox"
          onClick={() => setIsOpen(false)}
        >
          <button
            type="button"
            className="reviews__lightbox-close"
            aria-label="Закрити"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>
          <img src={image} alt={alt} onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </>
  );
};
