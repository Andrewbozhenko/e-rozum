import { ButtonFillArrow } from "@components/ui/button-fillArrow";
import { useForm } from "react-hook-form";

export const Form = () => {
  const { register, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      personType: "студент",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="form section">
      <div className="container">
        <div className="form__wrapper">
          <div className="form__text">
            <h2 className="form__title title">Зворотня форма</h2>
            <div className="form__description">
              <p>
                Залиште свої контакти і менеджер зв‘яжеться з Вами для уточнення
                деталей протягом доби
              </p>
            </div>
          </div>
          <div className="form__content">
            <h2 className="form__title-inner title">Давайте розпочнемо</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="form__body">
              <div className="form__radio">
                <button
                  type="button"
                  className={
                    watch("personType") === "студент"
                      ? "form__radio-button form__radio-button--active"
                      : "form__radio-button"
                  }
                  onClick={() => setValue("personType", "студент")}
                >
                  студент
                </button>
                <button
                  type="button"
                  className={
                    watch("personType") === "вчитель"
                      ? "form__radio-button form__radio-button--active"
                      : "form__radio-button"
                  }
                  onClick={() => setValue("personType", "вчитель")}
                >
                  вчитель
                </button>
              </div>
              <div className="form__inner">
                <div className="form__input">
                  <label>
                    <span>Яке Ваше імʼя?</span>
                    <input placeholder="Iмʼя" {...register("firstName")} />
                  </label>
                </div>
                <div className="form__input">
                  <label>
                    <span>Яке Ваше прізвище?</span>
                    <input placeholder="Прізвище" {...register("secondName")} />
                  </label>
                </div>
                <div className="form__input">
                  <label>
                    <span>Телефон</span>
                    <input
                      placeholder="Телефон"
                      type="number"
                      {...register("phone")}
                    />
                  </label>
                </div>
                <div className="form__input">
                  <label>
                    <span>Email</span>
                    <input
                      placeholder="Email"
                      type="email"
                      {...register("email")}
                    />
                  </label>
                </div>
                <div className="form__textarea">
                  <label>
                    <span>Декілька слів про вас *необовʼязково</span>
                    <textarea {...register("textarea")}></textarea>
                    <p>
                      Додайте, будь ласка свій телеграмчік для кращої
                      комунікації
                    </p>
                  </label>
                </div>
              </div>
              <ButtonFillArrow text="надіслати" type="submit" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
