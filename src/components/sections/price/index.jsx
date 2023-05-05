import { PriceCard } from "@components/cards/price-card";
import { PRICE } from "@utils";

export const Price = () => {
  return (
    <section className="price section" id="price">
      <div className="container">
        <div className="price__wrapper">
          <div className="price__top">
            <div className="price__text">
              <h2 className="price__title title">Ціни</h2>
              <div className="price__description">
                <p>
                  Обери найбільш вигідний та комфортний пакет для своїх потреб.
                </p>
              </div>
            </div>
            <div className="price__subjects">
              <h2 className="price__subjects-title title">
                Ми навчаємо таким предметам
              </h2>
              <ul className="price__subjects-list">
                <li className="price__subjects-item">Українська</li>
                <li className="price__subjects-item">Математика</li>
                <li className="price__subjects-item">Фізика</li>
                <li className="price__subjects-item">Хімія</li>
                <li className="price__subjects-item">Біологія</li>
                <li className="price__subjects-item">Географія</li>
                <li className="price__subjects-item">Англійська</li>
              </ul>
            </div>
          </div>
          <ul className="price__list">
            {PRICE.map((review) => (
              <PriceCard
                key={review.id}
                priceTotal={review.priceTotal}
                title={review.title}
                lesson={review.lesson}
                list={review.list}
                priceLesson={review.priceLesson}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
