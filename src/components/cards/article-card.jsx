import Link from "next/link";

export const ArticleCard = (props) => {
  const { image, text, swiperDestroyed, link } = props;

  return (
    <div className={`articles__card ${!swiperDestroyed && "swiper-slide"}`}>
      <div className="articles__card-wrapper">
        <div className="articles__card-info">
          <div className="articles__card-image">
            <img src={image} alt={text} />
          </div>
          <div className="articles__card-text">{text}</div>
        </div>
        <Link href={link} className="button__circle">
          Читати далі
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
  );
};
