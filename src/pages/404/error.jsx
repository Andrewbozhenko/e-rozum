import { ButtonFillArrow } from "@components/ui/button-fillArrow";

export const Error404 = () => {
  return (
    <section className="error section">
      <div className="container">
        <div className="error__wrapper">
          <div className="error__content">
            <div className="error__text">
              <div className="error__titles">
                <h1 className="error__title">404</h1>
                <h2 className="error__subtitle">
                  Упс! <br></br> Сторінка не знайдена
                </h2>
              </div>
              <div className="error__description">
                <p>
                  Сторінки немає або вона була видалена! Ми радимо вам перейти
                  на головну сторінку
                </p>
              </div>
            </div>
            <ButtonFillArrow text="На головну" />
          </div>
          <div className="error__image">
            <img src="img/error/error.png" alt="error 404" />
          </div>
        </div>
      </div>
    </section>
  );
};
