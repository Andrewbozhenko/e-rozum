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

      const fields = [
        ["Ім'я", req.body.firstName],
        ["Телефон", req.body.phone],
        ["Telegram", req.body.telegram],
        ["Роль", req.body.personType],
        ["Предмет", req.body.subject],
        ["Побажання", req.body.about],
      ];

      const messageEmail = fields
        .map(([label, value]) => `<p>${label}: <strong>${value || "—"}</strong></p>`)
        .join("");
      const messageTg = encodeURIComponent(
        fields.map(([label, value]) => `${label}: ${value || "—"}`).join("\n")
      );

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
