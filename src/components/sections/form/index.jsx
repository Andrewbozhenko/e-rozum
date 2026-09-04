import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  formatUkrainianPhone,
  UKRAINIAN_PHONE_PATTERN,
} from "@utils/format-phone";

export const Form = (props) => {
  const { withSubject } = props;
  const { push, query } = useRouter();

  const teacher = query?.person;

  const { register, handleSubmit, watch, reset, setValue, formState } = useForm(
    {
      defaultValues: {
        firstName: "",
        phone: "",
        telegram: "",
        subject: "",
        personType: "студент",
      },
    }
  );

  const firstNameError = formState.errors?.firstName;
  const phoneError = formState.errors?.phone;
  const subjectError = formState.errors?.subject;

  const phoneField = register("phone", {
    required: true,
    pattern: UKRAINIAN_PHONE_PATTERN,
  });
  const handlePhoneChange = (e) => {
    e.target.value = formatUkrainianPhone(e.target.value);
    phoneField.onChange(e);
  };

  // **Local state
  const [isError, setIsError] = useState(false);

  const onSubmit = async (data) => {
    try {
      setIsError(false);

      const resp = await fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          type: withSubject ? "subject" : "contact",
        }),
      });

      if (resp.status !== 200) {
        throw resp;
      }

      reset();

      push("/success");
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
      setIsError(true);
    }
  };

  useEffect(() => {
    if (!teacher) return;

    setValue("personType", "вчитель");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [teacher]);

  return (
    <section id="contacts" className="form section">
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
            <h3 className="form__title-inner">
              Щоб отримати безкоштовний урок, залиште ваші контактні дані і ми
              з вами зв’яжемось
            </h3>
            <form onSubmit={handleSubmit(onSubmit)} className="form__body">
              {/* <div className="form__radio">
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
              </div> */}
              <div className="form__inner">
                <div
                  className={
                    firstNameError ? "form__input error" : "form__input"
                  }
                >
                  <label>
                    <span>Яке Ваше імʼя?*</span>
                    <input
                      placeholder="Iмʼя"
                      {...register("firstName", { required: true })}
                    />
                    {firstNameError && (
                      <span className="error-text">
                        Заповніть, будь ласка, поле
                      </span>
                    )}
                  </label>
                </div>
                <div
                  className={
                    phoneError
                      ? "form__input form__input--full error"
                      : "form__input form__input--full"
                  }
                >
                  <label>
                    <span>Телефон*</span>
                    <input
                      type="tel"
                      placeholder="+380 (__) ___ __ __"
                      {...phoneField}
                      onChange={handlePhoneChange}
                    />
                    {phoneError && (
                      <span className="error-text">
                        Заповніть, будь ласка, поле
                      </span>
                    )}
                  </label>
                </div>
                <div className="form__input">
                  <label>
                    <span>Введіть Ваш телеграм нік</span>
                    <input placeholder="Telegram" {...register("telegram")} />
                  </label>
                </div>
                {withSubject && (
                  <div
                    className={
                      subjectError ? "form__textarea error" : "form__textarea"
                    }
                  >
                    <label>
                      <span>Напишіть назву предмету*</span>
                      <textarea
                        {...register("subject", { required: true })}
                      ></textarea>
                      {subjectError && (
                        <span className="error-text">
                          Заповніть, будь ласка, поле
                        </span>
                      )}
                      {/* <p>
                      Додайте, будь ласка свій телеграмчік для кращої
                      комунікації
                    </p> */}
                    </label>
                  </div>
                )}
                {!withSubject && (
                  <div className="form__textarea">
                    <label>
                      <span>Декілька слів про вас</span>
                      <textarea {...register("about")}></textarea>
                    </label>
                  </div>
                )}
              </div>
              {isError && (
                <p className="form__error">
                  Не вдалося відправити форму. Спробуйте пізніше!
                </p>
              )}
              <button
                className="button__fill-arrow"
                type="submit"
                disabled={formState.isSubmitting}
              >
                <span>
                  {formState.isSubmitting ? "відправка..." : "надіслати"}
                </span>
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
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
