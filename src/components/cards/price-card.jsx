import { useModal } from "@utils";

export const PriceCard = (props) => {
  const { priceTotal } = props;
  const { title } = props;
  const { lesson } = props;
  const { list } = props;
  const { priceLesson } = props;
  const { toggleContactModal } = useModal();

  return (
    <li className="price__card">
      <div href="/#contacts">
        <div className="price__card-total">{`${priceTotal} ₴`}</div>
        <h3 className="price__card-title">{title}</h3>
        <div className="price__card-lesson">{`${lesson} занять`}</div>
        <ul className="price__card-list">
          {list.map((item) => (
            <li key={item} className="price__card-item">
              {item}
            </li>
          ))}
        </ul>
        <div className="price__card-price">{`${priceLesson} ₴ / урок`}</div>
        <button onClick={toggleContactModal} className="price__card-button">
          Спробувати
        </button>
      </div>
    </li>
  );
};
