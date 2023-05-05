import Link from "next/link";

export const PriceCard = (props) => {
  const { priceTotal } = props;
  const { title } = props;
  const { lesson } = props;
  const { list } = props;
  const { priceLesson } = props;

  return (
    <li className="price__card">
      <Link href="#">
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
        <div className="price__card-button">Спробувати</div>
      </Link>
    </li>
  );
};
