import { ButtonEnroll } from "@components/ui";
import { useModal } from "@utils";

export const Hero = () => {
  // **Props
  const { toggleContactModal } = useModal();

  return (
    <section className="hero">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__content">
            <div className="hero__text">
              <h1 className="hero__title">
                Підготовка до НМТ на 190+ балів без стресу та зубріння
              </h1>
              <div className="hero__description">
                <p>
                  Вже три роки ми впевнено та професійно допомагаємо учням
                  України отримувати найвищі бали та вступати до ВНЗ.
                </p>
              </div>
            </div>
            <ButtonEnroll
              className="hero__button"
              text="Записатись на безкоштовний урок"
              onClick={() => toggleContactModal()}
            />
            <div className="hero__grade">
              <ul className="hero__users">
                <li className="hero__user">
                  <img
                    src="img/hero/user1.png"
                    width={40}
                    height={40}
                    loading="lazy"
                    alt="User avatar"
                  />
                </li>
                <li className="hero__user">
                  <img
                    src="img/hero/user2.png"
                    width={40}
                    height={40}
                    loading="lazy"
                    alt="User avatar"
                  />
                </li>
                <li className="hero__user">
                  <img
                    src="img/hero/user3.png"
                    width={40}
                    height={40}
                    loading="lazy"
                    alt="User avatar"
                  />
                </li>
              </ul>
              <div className="hero__score">
                <ul className="hero__score-list">
                  <li className="hero__score-item">
                    <span className="hero__score-bullet"></span>
                  </li>
                  <li className="hero__score-item">
                    <span className="hero__score-bullet"></span>
                  </li>
                  <li className="hero__score-item">
                    <span className="hero__score-bullet"></span>
                  </li>
                  <li className="hero__score-item">
                    <span className="hero__score-bullet"></span>
                  </li>
                  <li className="hero__score-item">
                    <span className="hero__score-half"></span>
                  </li>
                </ul>
                <div className="hero__score-text">
                  <p>
                    (<span>4.8</span> від <span>11</span> користувачів)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="hero__image">
            <img
              src="img/hero/hero@1x.png"
              srcSet="img/hero/hero@2x.png 2x"
              width="426"
              height="463"
              alt="Image teacher"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
