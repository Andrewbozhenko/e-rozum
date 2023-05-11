import React, { useEffect, useState } from "react";
import { SubjectCard } from "@components/cards";
import { SUBJECTS } from "@utils";
import { Swiper, Pagination } from "swiper";

export const Subjects = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [swiperDestroyed, setSwiperDestroyed] = useState(false);

  useEffect(() => {
    Swiper.use([Pagination]);

    const swiper = new Swiper(".subjects__container", {
      slidesPerView: 1.2,
      spaceBetween: 25,
      autoHeight: true,
      pagination: {
        el: ".subjects__pagination",
        type: "fraction",
        renderFraction: function (currentClass, totalClass) {
          return `<span class="${currentClass}"></span><span style="margin: 0 5px 0 5px;">|</span><span class="${totalClass}"></span>`;
        },
      },
      breakpoints: {
        475: {
          slidesPerView: 2,
          spaceBetween: 20,
          autoHeight: true,
        },
      },
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
        const swiper = new Swiper(".subjects__container", {
          slidesPerView: 1.2,
          spaceBetween: 25,
          autoHeight: true,
          pagination: {
            el: ".subjects__pagination",
            type: "fraction",
            renderFraction: function (currentClass, totalClass) {
              return `<span class="${currentClass}"></span><span style="margin: 0 5px 0 5px;">|</span><span class="${totalClass}"></span>`;
            },
          },
          breakpoints: {
            475: {
              slidesPerView: 2,
              spaceBetween: 20,
              autoHeight: true,
            },
          },
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
    <section id="subjects" className="subjects section">
      <div className="container">
        <div className="subjects__wrapper">
          <div className="subjects__text">
            <h2 className="subjects__title title">Предмети</h2>
            <div className="subjects__description description">
              <p>За один клік ти знаходиш репетитора для своїх цілей.</p>
            </div>
            <div className="subjects__pagination" />
          </div>
          <div
            className={`subjects__container ${
              !swiperDestroyed && "swiper-container"
            }`}
          >
            <div
              className={`subjects__list ${
                !swiperDestroyed && "swiper-wrapper"
              }`}
            >
              {SUBJECTS.map((subject) => (
                <SubjectCard
                  swiperDestroyed={swiperDestroyed}
                  key={subject.id}
                  title={subject.title}
                  image={subject.image}
                  description={subject.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
