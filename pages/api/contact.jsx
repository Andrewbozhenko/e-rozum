/* eslint-disable import/no-anonymous-default-export */

import { createTransport } from "nodemailer";

export default async (req, res) => {
  if (req.method === "POST") {
    try {
      const token = "5969564488:AAEAFYvuj_-OseGA1UQt0AuPHG6OlKgR9MQ";
      const chatId = "-1001894213334";

      const transporter = createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
          user: "Marickapengri177",
          pass: "mdnukqwafwqmkoiq",
        },
        secure: true,
      });

      const messageEmail =
        req.body?.type === "subject"
          ? `
          <p>Ім'я: <strong>${req.body.firstName || "—"}</strong></p>
          <p>Прізвище: <strong>${req.body.secondName || "—"}</strong></p>
          <p>Телефон: <strong>${req.body.phone || "—"}</strong></p>
          <p>Telegram: <strong>${req.body.telegram || "—"}</strong></p>
          <p>Роль: <strong>${req.body.personType || "—"}</strong></p>
          <p>Предмет: <strong>${req.body.subject || "—"}</strong></p>
        `
          : `
          <p>Ім'я: <strong>${req.body.firstName || "—"}</strong></p>
          <p>Прізвище: <strong>${req.body.secondName || "—"}</strong></p>
          <p>Телефон: <strong>${req.body.phone || "—"}</strong></p>
          <p>Telegram: <strong>${req.body.telegram || "—"}</strong></p>
          <p>Роль: <strong>${req.body.personType || "—"}</strong></p>
          <p>Про мене: <strong>${req.body.about || "—"}</strong></p>
        `;
      const messageTg =
        req.body?.type === "subject"
          ? `
            Ім'я: ${req.body.firstName || "—"}%0AПрізвище: ${
              req.body.secondName || "—"
            }%0AТелефон: ${req.body.phone}%0ATelegram: ${
              req.body.Telegram || "—"
            }%0AРоль: ${req.body.personType || "—"}%0AПредмет: ${
              req.body.subject || "—"
            }
          `
          : `
            Ім'я: ${req.body.firstName || "—"}%0AПрізвище: ${
              req.body.secondName || "—"
            }%0AТелефон: ${req.body.phone}%0ATelegram: ${
              req.body.Telegram || "—"
            }%0AРоль: ${req.body.personType || "—"}%0AПро мене: ${
              req.body.about || "—"
            }
          `;

      const mailData = {
        from: "Marickapengri177@gmail.com",
        to: "Marickapengri177@gmail.com",
        subject: "єРозум - заявка",
        text: `Заявка з сайту єРозум від: ${req.body.name}`,
        html: messageEmail,
      };

      const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${messageTg}&parse_mode=HTML`;

      transporter.sendMail(mailData, async (err) => {
        if (err) {
          console.log("err", err);
          res.status(400).json(err);
          return;
        }

        await fetch(url);

        res.status(200).json({ message: "Success!" });
      });
    } catch (err) {
      console.log(err);
      res.status(401).json(err);
    }
  }
};
