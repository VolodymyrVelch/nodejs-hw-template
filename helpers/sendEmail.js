const sgMail = require('@sendgrid/mail');
require('dotenv').config();

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async data => {
  const email = { ...data, from: 'volodymyr_v@meta.ua' };
  try {
    await sgMail.send(email);
    return true;
  } catch (error) {
    return error;
  }
};

module.exports = sendEmail;
