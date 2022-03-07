import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID);
const sendEmails = async (req, res) => {
  const message = {
    to: 'josehm1999@gmail.com',
    from: `anibal94q_q245n@tigpe.com`,
    subject: 'Hello from Mastersoft',
    text: 'Hello from Mastersoft',
    html: '<h1>Hello from Mastersoft</h1>',
  };

  const confirmation = await sgMail.send(message);
  res.status(200).send({ confirmation });
};

export { sendEmails };
