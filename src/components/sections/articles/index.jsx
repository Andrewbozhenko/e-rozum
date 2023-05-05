import React, { useEffect, useState } from "react";
import { Swiper } from "swiper";
import { ArticleCard } from "@components/cards/article-card";
import { ButtonFillArrow } from "@components/ui/button-fillArrow";
import { ARTICLES } from "@utils";

export const Articles = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [swiperDestroyed, setSwiperDestroyed] = useState(false);

  useEffect(() => {
    const swiper = new Swiper(".articles__container", {
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
        const swiper = new Swiper(".articles__container", {
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
    <section className="articles section">
      <div className="container">
        <div className="articles__wrapper">
          <div className="articles__info">
            <h2 className="articles__title title">Статі</h2>
            <div className="articles__button-desktop">
              <ButtonFillArrow text="усі статті" />
            </div>
          </div>

          <div
            className={`articles__container ${
              !swiperDestroyed && "swiper-container"
            }`}
          >
            <div
              className={`articles__list ${
                !swiperDestroyed && "swiper-wrapper"
              }`}
            >
              {ARTICLES.map((article) => (
                <ArticleCard
                  swiperDestroyed={swiperDestroyed}
                  key={article.id}
                  image={article.image}
                  text={article.text}
                />
              ))}
            </div>
          </div>

          <div className="articles__button-mobile">
            <ButtonFillArrow text="усі статті" />
          </div>
        </div>
      </div>
    </section>
  );
};
