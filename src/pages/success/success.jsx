import { ButtonFillArrow } from "@components/ui/button-fillArrow";

export const SuccessSend = () => {
  return (
    <section className="success">
      <div className="container">
        <div className="success__wrapper">
          <div className="success__image">
            <img src="img/success/success.png" alt="" />
          </div>
          <div className="success__text">
            <p>Наш менеджер звʼяжеться з вами протягом доби</p>
          </div>
          <ButtonFillArrow text="на головну" />
        </div>
      </div>
    </section>
  );
};
