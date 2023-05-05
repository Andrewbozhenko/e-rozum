export const Teacher = (props) => {
  const { subject } = props;
  const { image } = props;
  const { gpa } = props;
  const { name } = props;

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
          <div className="teachers__about-tag">@teacher</div>
        </div>
        <div className="teachers__about-text">
          <p>
            Lörem ipsum kontrakrosamma fanar intran, plus jur men dekajögada.
            Besm kasamma och fapesam. Tiss stenodade, kvasijäjav der
            helikoptermamma och spengar. Bödade hexaheten inte hexavaktiga
            post-it-krig och bektig antroposkop. Sell relig håferat
            reinfeldtare, pronomi. Temakonfirmation mivektiga. Saktigt plaktigt
            liksom husm så transitflykting: prejäligen. Hypovirad jäfebel än
            minesk digack. Tetraning metroform goskap bönådoskapet.
          </p>
        </div>
      </div>
    </div>
  );
};
