import React, { useEffect } from "react";
import { Swiper, Navigation } from "swiper";
import "swiper/swiper.css";
import { TEACHERS, useModal } from "@utils";
import { Teacher } from "@components/cards/teacher";
import { ButtonEnroll } from "@components/ui";

export const Teachers = () => {
  const { toggleContactModal } = useModal();
  useEffect(() => {
    Swiper.use([Navigation]);
    const swiper = new Swiper(".teachers__slider", {
      slidesPerView: 1,
      spaceBetween: 25,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        1280: {
          slidesPerView: 3.1,
          spaceBetween: 25,
        },
        767: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
      },
    });
  }, []);

  return (
    <section id="teachers" className="teachers section">
      <div className="container">
        <div className="teachers__wrapper">
          <div className="teachers__text">
            <h2 className="teachers__title title">Вчителі</h2>
            <div className="teachers__description">
              <p>
                Молода та прогресивна команда, яка психологічно адаптована до
                роботи з учнями
              </p>
            </div>
            <div className="teachers__navigation-desktop">
              <div className="teachers__navigation">
                <div className="swiper-button-prev teachers__navigation--prev">
                  <svg
                    width="10"
                    height="17"
                    viewBox="0 0 10 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.53624 16.998C8.77286 16.998 9.01043 16.9079 9.19172 16.7262C9.55377 16.3642 9.55377 15.7783 9.19172 15.4162L2.77319 8.99811L9.19172 2.57959C9.55377 2.21753 9.55377 1.63112 9.19172 1.26959C8.82967 0.907534 8.24325 0.907534 7.88129 1.26959L0.808235 8.34264C0.446183 8.70469 0.446183 9.2911 0.808235 9.65264L7.88129 16.7261C8.06197 16.9074 8.2991 16.998 8.53624 16.998Z"
                      fill="#EAEAEA"
                    />
                  </svg>
                </div>
                <div className="swiper-button-next teachers__navigation--next">
                  <svg
                    width="10"
                    height="17"
                    viewBox="0 0 10 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.53624 16.998C8.77286 16.998 9.01043 16.9079 9.19172 16.7262C9.55377 16.3642 9.55377 15.7783 9.19172 15.4162L2.77319 8.99811L9.19172 2.57959C9.55377 2.21753 9.55377 1.63112 9.19172 1.26959C8.82967 0.907534 8.24325 0.907534 7.88129 1.26959L0.808235 8.34264C0.446183 8.70469 0.446183 9.2911 0.808235 9.65264L7.88129 16.7261C8.06197 16.9074 8.2991 16.998 8.53624 16.998Z"
                      fill="#EAEAEA"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="swiper-container teachers__slider">
            <div className="swiper-wrapper teachers__swiper-wrapper">
              {TEACHERS.map((teacher) => (
                <Teacher
                  key={teacher.id}
                  subject={teacher.subject}
                  image={teacher.image}
                  gpa={teacher.gpa}
                  name={teacher.name}
                  text={teacher.text}
                />
              ))}
            </div>
          </div>
          <div className="teachers__navigation-mobile">
            <div className="teachers__navigation">
              <div className="swiper-button-prev teachers__navigation--prev">
                <svg
                  width="10"
                  height="17"
                  viewBox="0 0 10 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.53624 16.998C8.77286 16.998 9.01043 16.9079 9.19172 16.7262C9.55377 16.3642 9.55377 15.7783 9.19172 15.4162L2.77319 8.99811L9.19172 2.57959C9.55377 2.21753 9.55377 1.63112 9.19172 1.26959C8.82967 0.907534 8.24325 0.907534 7.88129 1.26959L0.808235 8.34264C0.446183 8.70469 0.446183 9.2911 0.808235 9.65264L7.88129 16.7261C8.06197 16.9074 8.2991 16.998 8.53624 16.998Z"
                    fill="#EAEAEA"
                  />
                </svg>
              </div>
              <div className="swiper-button-next teachers__navigation--next">
                <svg
                  width="10"
                  height="17"
                  viewBox="0 0 10 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.53624 16.998C8.77286 16.998 9.01043 16.9079 9.19172 16.7262C9.55377 16.3642 9.55377 15.7783 9.19172 15.4162L2.77319 8.99811L9.19172 2.57959C9.55377 2.21753 9.55377 1.63112 9.19172 1.26959C8.82967 0.907534 8.24325 0.907534 7.88129 1.26959L0.808235 8.34264C0.446183 8.70469 0.446183 9.2911 0.808235 9.65264L7.88129 16.7261C8.06197 16.9074 8.2991 16.998 8.53624 16.998Z"
                    fill="#EAEAEA"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="teachers__cta">
            <ButtonEnroll
              text="Записатись на перший безкоштовний урок"
              onClick={() => toggleContactModal()}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
