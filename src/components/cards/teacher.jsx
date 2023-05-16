export const Teacher = (props) => {
  const { name, gpa, subject, image, text } = props;

  return (
    <div className="teachers__card swiper-slide">
      <div className="teachers__card-wrapper">
        <div className="teachers__card-info">
          <div className="teachers__card-subject">{subject}</div>
          <div className="teachers__card-image">
            <img src={image} alt={subject} />
          </div>
        </div>
        <div className="teachers__card-bottom">
          <div className="teachers__card-gpa">{gpa}</div>
          <div className="teachers__card-name">{name}</div>
        </div>
      </div>

      <div className="teachers__about">
        <div className="teachers__about-top">
          <p className="teachers__about-title">Про викладача</p>
        </div>
        <div className="teachers__about-text">
          {typeof text === "string" && <p>{text}</p>}
          {typeof text !== "string" && text?.map((t) => <p key={t}>{t}</p>)}
        </div>
      </div>
    </div>
  );
};
