import React, { useEffect, useState } from "react";
import { Swiper } from "swiper";
import { ArticleCard } from "@components/cards/article-card";
import { ButtonFillArrow } from "@components/ui/button-fillArrow";
import { ButtonEnroll } from "@components/ui";
import { ARTICLES } from "@utils";
import { useRouter } from "next/router";
import { useModal } from "@utils";
import Link from "next/link";

export const Articles = () => {
  const { push } = useRouter();
  const { toggleContactModal } = useModal();
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
    <section id="articles" className="articles section">
      <div className="container">
        <div className="articles__cta">
          <ButtonEnroll
            text="Спробувати безкоштовний урок"
            onClick={() => toggleContactModal()}
          />
        </div>
        <div className="articles__wrapper">
          <div className="articles__info">
            <h2 className="articles__title title">Статі</h2>
            <div className="articles__button-des ktop">
              <Link href="/articles" className="button__fill-arrow">
                <span>усі статті</span>
                <span>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.7279 1.00059C14.7279 0.448309 14.2802 0.000593799 13.7279 0.000593799L4.72792 0.000593799C4.17564 0.000593799 3.72792 0.448309 3.72792 1.00059C3.72792 1.55288 4.17564 2.00059 4.72792 2.00059H12.7279V10.0006C12.7279 10.5529 13.1756 11.0006 13.7279 11.0006C14.2802 11.0006 14.7279 10.5529 14.7279 10.0006L14.7279 1.00059ZM1.70711 14.4356L14.435 1.7077L13.0208 0.293487L0.292893 13.0214L1.70711 14.4356Z"
                      fill="#EAEAEA"
                    />
                  </svg>
                </span>
              </Link>
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
                  link={article.link}
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
