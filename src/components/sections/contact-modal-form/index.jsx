import { useModal } from "@utils";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  formatUkrainianPhone,
  UKRAINIAN_PHONE_PATTERN,
} from "@utils/format-phone";

export const ContactModalForm = (props) => {
  const { withSubject } = props;

  const { toggleContactModal } = useModal();
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

      toggleContactModal();
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
      setIsError(true);
    }
  };

  return (
    <div className="contact-modal-form">
      <div className="contact-modal-form__description">
        <h2 className="contact-modal-form__title title">
          Щоб отримати безкоштовний урок, залиште ваші контактні дані і ми з
          вами зв’яжемось
        </h2>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="contact-modal-form__body"
      >
        <div className="contact-modal-form__inner">
          <div
            className={
              firstNameError
                ? "contact-modal-form__input error"
                : "contact-modal-form__input"
            }
          >
            <label>
              <span>Яке Ваше імʼя?*</span>
              <input
                placeholder="Iмʼя"
                {...register("firstName", { required: true })}
              />
              {firstNameError && (
                <span className="error-text">Заповніть, будь ласка, поле</span>
              )}
            </label>
          </div>
          <div
            className={
              phoneError
                ? "contact-modal-form__input error"
                : "contact-modal-form__input"
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
                <span className="error-text">Заповніть, будь ласка, поле</span>
              )}
            </label>
          </div>
          <div className="contact-modal-form__input">
            <label>
              <span>Введіть Ваш телеграм нік</span>
              <input placeholder="Telegram" {...register("telegram")} />
            </label>
          </div>
          {withSubject && (
            <div
              className={
                subjectError
                  ? "contact-modal-form__textarea error"
                  : "contact-modal-form__textarea"
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
              </label>
            </div>
          )}
          {!withSubject && (
            <div className="contact-modal-form__textarea">
              <label>
                <span>Інші побажання</span>
                <textarea {...register("about")}></textarea>
              </label>
            </div>
          )}
        </div>
        {isError && (
          <p className="contact-modal-form__error">
            Не вдалося відправити форму. Спробуйте пізніше!
          </p>
        )}
        <button
          className="button__fill-arrow contact-modal-form__button"
          type="submit"
          disabled={formState.isSubmitting}
        >
          <span>{formState.isSubmitting ? "відправка..." : "надіслати"}</span>
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
  );
};
