'use strict';

require('dotenv').config();
const nodemailer = require('nodemailer');

const main = async () => {
  const transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: process.env.PORT,
    secure: true,
    auth: {
      user: process.env.USERNAME,
      pass: process.env.PASSWORD,
    },
  });

  const info = await transporter.sendMail({
    from: process.env.FROM,
    to: process.env.TO,
    subject: `Dark Mode Email Test ${Math.random().toString().substr(2, 6)}`,
    html: `
<html>
  <head>
    <meta name="color-scheme" content="light dark">
    <meta name="supported-color-schemes" content="light dark">
    <style>
      :root {
        color-scheme: light dark;
        supported-color-schemes: light dark;
      }
      body {
        min-height: 100vh;
        min-width: 100vw;
        font-size: 100%;
        font-family: sans-serif;
        background-color: #eee;
        color: #111;
      }
      @media (prefers-color-scheme: dark) {
        body {
          background-color: #111;
          color: #eee;
        }
      }
      .darkmode {
        background-color: orange;
        color: black;
      }
      @media (prefers-color-scheme: dark) {
        .darkmode {
          background-color: violet;
          color: white;
        }
      }
      .dark {
        display: none;
      }
      @media (prefers-color-scheme: dark) {
        .dark {
          display: block;
        }
        .light {
          display: none;
        }
      }
      div {
        padding: 0.5em;
      }
    </style>
  </head>
  <body>
    <div class="darkmode">I obey to custom dark mode rules.</div>
    <div>I obey to the user-agent stylesheet rules.</div>
    <div>
      <img class="dark" width="100" height="100" src="cid:moon">
      <img class="light" width="100" height="100" src="cid:sun">
    </div>
    <div>👉 View source: <a href="https://github.com/tomayac/dark-mode-email">github.com/tomayac/dark-mode-email</a>.</div>
  </body>
</html>`,
    attachments: [{
      filename: 'moon.png',
      path: 'moon.png',
      cid: 'moon'
    },
    {
      filename: 'moon.png',
      path: 'sun.png',
      cid: 'sun'
    }]
  });

  console.log(`Message sent: ${info.messageId}`);
}

main().catch(console.error);
